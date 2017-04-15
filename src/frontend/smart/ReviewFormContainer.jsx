import React from 'react';
import app from '../app';
import getShoes from '../getShoes';
import ReviewForm from '../dumb/ReviewForm';
import {Redirect} from 'react-router-dom';
import Loading from '../dumb/LoadingProgress';

export default class ReviewFormContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user : props.user,
            shoes : undefined,
            link : props.props.match.params.name,
            body : '',
            open : true,
            rating : 0,
            done : false,
        }
        
        this.handleCancel = this.handleCancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRating = this.handleRating.bind(this);
    }
    
    async handleSubmit() {
        const service = app.service('/api/reviews');
        const data = {
            shoes : this.state.shoes.name,
            account : this.state.user.username,
            rating : this.state.rating,
            comments : [],
            desc : this.state.body,
        };
        const query = await service.create(data);
        if (query) {
            this.setState({done : true});
        }
    }

    handleCancel() {
        this.setState({open : false});
    }

    handleChange(event) {
        // console.log(event);
        const field = event.target.name;
        this.setState({[field] : event.target.value});
    }

    handleRating(value) {
        this.setState({rating : value});
    }

    async getPurchase() {
        const service = app.service('/api/purchases');
        const purchase = await service.get(this.state.link);
        this.setState({shoes : purchase.shoes});
    }

    componentWillMount() {
        this.getPurchase();
    }

    render() {
        return (
            (this.state.user && this.state.shoes) ?
            <div>
                {(this.state.done) ?
                <Redirect to="/purchases" />
                :
                <ReviewForm
                onChange={this.handleChange}
                state={this.state.open}
                shoes={this.state.shoes}
                reviewValue={this.state.body}
                rating={this.state.rating}
                handleRating={this.handleRating}
                handleCancel={this.handleCancel}
                handleSubmit={this.handleSubmit}
                />
                }

            </div>
            : <Loading/>
        )
    }
}