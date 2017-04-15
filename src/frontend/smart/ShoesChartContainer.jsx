import React from 'react';
import ShoesChart from '../dumb/DataChart';
import app from '../app';
import Loading from '../dumb/LoadingProgress';

export default class ShoesChartContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            link : props.props.match.params.name,
            shoes : undefined,
            user : props.user,
        }
    }

    async retrieveShoes() {
        console.log(this.state.link, ' da link')
        const service = app.service('/api/shoes');
        const allShoes = await service.find();
        // const allShoes = await service.find({query : {collection : this.state.link + ''}});
        this.setState({shoes : allShoes});
        console.log(allShoes, ' da allShoes')
    }

    componentDidMount() {
        this.retrieveShoes();
        app.service('/api/shoes').on('created' , newShoes => {
            this.setState({shoes : this.state.shoes.concat(newShoes)});
        });
        app.service('/api/shoes').on('removed' , oldShoes => {
            this.setState({shoes : this.state.shoes.filter(shoes => shoes.name !== oldShoes.name)});
        });
    }

    render() {
        return (
            (this.state.user && this.state.shoes && this.state.user.type === "Admin") ?
            <ShoesChart
            data={this.state.shoes}
            type={this.state.link}
            />
            : <Loading />
        )
    }

}