import React from 'react';
import app from '../app';
import AddPromoForm from '../dumb/AddPromo';
import { Redirect } from 'react-router-dom';
import Loading from '../dumb/LoadingProgress';

export default class AddShoesContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            successful : false,            
            open : true,
            name : '',
            shoes : [],
            dataSource : undefined,
            discount : '',
            startDate : undefined,
            endDate : undefined,
            user : props.user,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addChip = this.addChip.bind(this);
        this.deleteChip = this.deleteChip.bind(this);
        this.handleStartDate = this.handleStartDate.bind(this);
        this.handleEndDate = this.handleEndDate.bind(this);
    }

    handleChange(event) {
        const field = event.target.name;
        this.setState({[field] : event.target.value});
    }

    handleStartDate(event, date) {
        this.setState({startDate : date});
    }

    handleEndDate(event, date) {
        this.setState({endDate : date});
    }

    handleClose() {
        this.setState({open : false});
    }

    async handleSubmit() {
        const service = app.service('/api/promos');
        const data = {
            name : this.state.name,
            shoes : this.state.shoes,
            discount : parseFloat(this.state.discount),
            startDate : this.state.startDate,
            endDate : this.state.endDate,
        };
        console.log(data, ' da data')
        const query = await service.create(data);
        if (query) {
            this.setState({successful : true});
        }
    }

    async getDataSource() {
        const service = app.service('/api/shoes');
        let dataSource = await service.find();
        dataSource = dataSource.map(data => data.name);
        this.setState({dataSource});
    }

    componentDidMount() {
        this.getDataSource();
    }

    addChip(data) {
        this.setState({shoes : this.state.shoes.concat(data)});
    }

    async deleteChip(chip) {
        const remaining = this.state.shoes.filter(obj => (obj !== chip));
        this.setState({shoes : remaining});
    }

    render() {
        return (
            <div>
                {
                (this.state.successful) ?
                <Redirect to="/store" /> :
                (this.state.dataSource) ?
                <AddPromoForm
                state={this.state.open}
                name={this.state.name}
                shoes={this.state.shoes}
                dataSource={this.state.dataSource}
                discount={this.state.discount}
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                close={this.handleClose}
                submit={this.handleSubmit}
                addChip={this.addChip}
                deleteChip={this.deleteChip}
                handleStartDate={this.handleStartDate}
                handleEndDate={this.handleEndDate}
                onChange={this.handleChange}
                />
                : <Loading />
                }
            </div>
        )
    }
}