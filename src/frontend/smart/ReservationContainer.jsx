import React from 'react';
import ReservationList from '../dumb/ReservationList';
import PurchaseForm from '../dumb/purchaseForm';
import app from '../app';
import Reservation from '../../models/Reservation';
import Loading from '../dumb/LoadingProgress';

export default class ReservationContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reservations : undefined,
            user : props.user,
            open : true,
            purchaseOpen : false,
            address : '',
            selected : '',
        }
        this.closeContainer = this.closeContainer.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handlePurchase = this.handlePurchase.bind(this);
        this.closePurchaseForm = this.closePurchaseForm.bind(this);
        this.openPurchaseForm = this.openPurchaseForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    closePurchaseForm() {
        this.setState({purchaseOpen : false, selected : ''});
    }

    openPurchaseForm(event) {
        this.setState({purchaseOpen : true, selected : event.target.id});
    }

    handleChange(event) {
        this.setState({address : event.target.value});
    }

    // getReservations() {
    //     let reservations = this.state.user.reservations.map(reservation => new Reservation(reservation));
    //     reservations = reservations.filter(reservation => !reservation.hasExpired());
    //     this.setState({reservations});
    // }

    async getReservations() {
        const service = app.service('/api/reservations');
        let reservations = await service.find({query : {account : this.state.user.username}});
        reservations = reservations.map(reservation => new Reservation(reservation));
        this.setState({reservations});
    }
    
    closeContainer() {
        this.setState({open : false});
    }

    componentWillMount() {
        this.getReservations();
        app.service('/api/reservations').on('created', doc => {
            if(doc.account === this.state.user.username) {
                console.log('yemen')
                this.setState({reservations : this.state.reservations.concat(new Reservation(doc))});
                }
            });
        app.service('/api/reservations').on('removed' , doc => {
            const remaining = this.state.reservations.filter(reservation => reservation.name !== doc.name);
            this.setState({reservations : remaining});
            this.state.user.reservationIsFullfilled(doc);
        });
    }


    async handleDelete(event) {
        const id = event.target.id;
        const service = app.service('/api/reservations');
        const query = await service.remove(id);
    }

    async handlePurchase() {   
        const reservationService = app.service('/api/reservations');
        const data = await reservationService.get(this.state.selected);
        const shopService = app.service('/api/shop');
        const query = await shopService.create(Object.assign(data, {
            datePurchased : new Date(Date.now()),
            address : this.state.address,
        }));  
        if (query) {
            this.state.user.reservationIsFullfilled(data);
            // this.state.user.addPurchase(data);
            this.closePurchaseForm();
        } 
    }

    render() {
        return (
            <div>
            {(this.state.reservations) ?
            <div>
                <ReservationList
                state={this.state.open}
                reservations={this.state.reservations}
                close={this.closeContainer}
                handleDelete={this.handleDelete}
                handlePurchase={this.openPurchaseForm}
                />
                <PurchaseForm
                onChange={this.handleChange}
                address={this.state.address}
                handleDone={this.handlePurchase}
                handleCancel={this.closePurchaseForm}
                purchaseOpen={this.state.purchaseOpen}
                />
            </div>
            : <Loading />
            }
            </div>
        );
    }
}