import React from 'react';
import app from '../app';
import ReviewList from '../dumb/ReviewList';
import getShoes from '../getShoes';
import Loading from '../dumb/LoadingProgress';

export default class ReviewsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            link : props.props.match.params.name,
            open : true,
            reviews : [],
            shoes : undefined,
        }
        this.handleClose = this.handleClose.bind(this);
    }

    async getShoes() {
        const shoes = await getShoes(this.state.link);
        this.setState({shoes});
        this.setState({reviews : shoes.reviews});
    }

    componentWillMount() {
        this.getShoes();
    }

    handleClose() {
        this.setState({open : false});
    }

    render() {
        return(
            (this.state.shoes) ? 
            <ReviewList
            state={this.state.open}
            reviews={this.state.reviews}
            close={this.handleClose}
            shoes={this.state.shoes}
            />
            : <Loading />
        );
    }

}