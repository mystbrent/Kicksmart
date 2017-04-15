import React from 'react';
import app from '../app';
import GridList from '../dumb/GridList';
import Shoes from '../../models/Shoes';
import Loading from '../dumb/LoadingProgress';

export default class GridContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user : props.user,
            menShoes : undefined,
            femaleShoes : undefined,
            highRatingShoes : undefined,
            discountedShoes : undefined,
            trendingShoes : undefined,
        }

    }

    async retrieveShoes() {
        const service = app.service('/api/shoes');
        let allShoes = await service.find();
        allShoes = allShoes.map(shoes => new Shoes(shoes));
        const menShoes = await service.find({query : {gender : 'Men'}});
        const femaleShoes = await service.find({query : {gender : 'Women'}});
        // const discountedShoes = await service.find({query : {promos : {$not : {$size : 0}}}});
        const discountedShoes = allShoes.filter(shoes => shoes.hasPromo());
        const highRatingShoes = allShoes.filter(shoes => shoes.hasReview() && shoes.hasGoodReviews());
        this.setState({menShoes, femaleShoes, highRatingShoes, discountedShoes});
    }

    componentWillMount() {
        this.retrieveShoes();
        const service = app.service('/api/shoes');
        service.on('created' , newShoes => {
            this.setState({shoes : this.state.shoes.concat(newShoes)});
        });
        service.on('removed' , deletedShoes => {
            this.setState({shoes : this.state.shoes.filter(shoes => shoes.name === deletedShoes.name)});
        });
    }

    render() {
        return (
            <div>
            {(this.state.user && this.state.menShoes && this.state.femaleShoes
            && this.state.highRatingShoes && this.state.discountedShoes) ?
                <div>
                    <GridList tilesData={this.state.menShoes} tag='Men '/>
                    <GridList tilesData={this.state.femaleShoes} tag='Women '/>
                    <GridList tilesData={this.state.highRatingShoes} tag='High Rated'/>
                    <GridList tilesData={this.state.discountedShoes} tag='Sale'/>
                </div>
            : <Loading/>}
            </div>
        );
    }
}