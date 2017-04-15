import React from 'react';
import Card from '../dumb/Card';
import app from '../app';
import Shoes from '../../models/Shoes';
import Account from '../../models/Account';
import Promo from '../../models/Promo';
import { Redirect } from 'react-router-dom';
import getShoes from '../getShoes';
import Loading from '../dumb/LoadingProgress';

export default class CardContainer extends React.Component {
    
    constructor(props) {
        super(props);
        // console.log(props.props.match.params.name, ' mamamia');
        this.state = {
            name : props.props.match.params.name,
            shoes : undefined,
            user : props.user,
            msg : '',
            color : null,
            size : null,
            promos : [],
            reserved : false,
        }
        this.handleReservation = this.handleReservation.bind(this);
        this.handleColorClick = this.handleColorClick.bind(this);
        this.handleSizeClick = this.handleSizeClick.bind(this);
    }

    handleColorClick(event) {
        const color = event.target.innerText;
        this.setState({color});
    }

    handleSizeClick(event) {
        const size = event.target.innerText;
        if (!isNaN(size)) {
            this.setState({size});
        }
    }

    async retrieveShoes() {
        const shoes = await getShoes(this.state.name);
        const promos = shoes.promos.map(promo => new Promo(promo));        
        this.setState({shoes, promos});
    }

    componentDidMount() {
        this.retrieveShoes();
    }

    async handleReservation() {
        if (this.state.size && this.state.color) {
        const service = app.service('/api/reservations');
        const shoes = {
            _id : this.state.shoes._id,
            name : this.state.shoes.name,
            image : this.state.shoes.image,
            price : this.state.shoes.getTotalPrice(),
        }
        const query = await service.create({
            shoes : shoes,
            name : this.state.user.username + "-" + this.state.shoes.name + 
            '-' + this.state.color + '-' + this.state.size,
            account : this.state.user,
            color : this.state.color,
            size : this.state.size,
            dateReserved : new Date(Date.now()),
        });
        if (query) {
            this.state.user.addReservation(query);
            this.setState({reserved : true});
        }
    }
    else {
        alert('Select Color and Size.');
    }
    }

    render() {
        return(
            <div>
                {
                    (this.state.shoes && this.state.user)
                    ? 
                    <div>
                    {(this.state.reserved) ? 
                    <Redirect to="/store"/>
                    : 
                    <Card
                    shoes={this.state.shoes}
                    reserve={this.handleReservation}
                    user={this.state.user}
                    handleColorTap={this.handleColorClick}
                    handleSizeTap={this.handleSizeClick}
                    color={this.state.color}
                    size={this.state.size}
                    promos={this.state.promos} />}
                    </div>                    
                     :
                    <Loading />
                }
            </div>
        );
    }
}