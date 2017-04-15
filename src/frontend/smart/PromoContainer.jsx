import React from 'react';
import app from '../app';
import PromoList from '../dumb/PromoList';
import getShoes from '../getShoes';
import Promo from '../../models/Promo';
import Loading from '../dumb/LoadingProgress';

export default class PromoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            link : props.props.match.params.name,
            promos : undefined,
            user : undefined,
            shoes : undefined,
            open : true,
        }
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({open : false});
    }

    async getSelectedShoes() {
        const service = app.service('/api/shoes');
        const shoes = await service.get(this.state.link);
        this.setState({shoes});
        let promos = shoes.promos.map(promo => new Promo(promo));
        promos = promos.filter(promo => !promo.hasExpired());
        this.setState({promos});
    }

    componentWillMount() {
        this.getSelectedShoes();        
    }

    render() {
        return (
            (this.state.shoes && this.state.promos) ?
            <PromoList
            state={this.state.open}
            close={this.handleClose}
            promos={this.state.promos}
            shoes={this.state.shoes}
            />
            : <Loading />
        );
    }
}