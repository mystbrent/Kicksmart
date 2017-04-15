import React from 'react';
import app from '../app';
import getShoes from '../getShoes';
import PurchaseList from '../dumb/PurchaseList';
import Purchase from '../../models/Purchase';
import Loading from '../dumb/LoadingProgress';

export default class PurchaseContainer extends React.Component {
    constructor(props) {
        super(props);   
        this.state = {
            user : props.user, 
            purchases : undefined,
            open : true,
        }
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({open : false});
    }

    async getPurchases() {
        const service = app.service('/api/purchases');
        let purchases = await service.find({query : {account : this.state.user.username}});
        purchases = purchases.map(purchase => new Purchase(purchase));
        this.setState({purchases});
    }

    componentDidMount() {
        this.getPurchases();
        app.service('/api/reservations').on('created', doc => {
            if (doc.account === this.state.user.username) {
                this.setState({purchases : this.state.purchases.concat(new Purchase(doc))});
            }
        });
    }


    render() {
        return(
            (this.state.user && this.state.purchases) ?
            <PurchaseList
            state={this.state.open}
            purchases={this.state.purchases}
            close={this.handleClose}
            />
            : <Loading />
        );
    }

}