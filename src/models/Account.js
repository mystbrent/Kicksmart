import Reservation from './Reservation';
import Purchase from './Purchase';
import Review from './Review';
import Model from './Model';
import Joi from 'joi';

export default class Account extends Model {
    constructor(doc) {
        super(doc);
        this.transformArray(this.reservations, Reservation);
        this.transformArray(this.purchases, Purchase);
        this.transformArray(this.reviews, Review);
    }

    static get schema() {
        return {
            _id : Joi.string(),
            username: Joi.string().alphanum().min(7).max(30).required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{7,30}$/).required(),
            passwordConfirmation: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } }),
            email: Joi.string().min(7).max(30).required(),
            name: Joi.string().min(4).max(30).required(),
            address: Joi.string().required(),
            type : Joi.string().regex(/^Regular|Admin$/).required(),
        }
    }

    transformArray(array, modelClass) {
        if (array) {
            array = array.map(doc => new modelClass(doc));
        }
    }

    addReservation(reservation) {
        if(this.hasReserveAllocation()) {
            this.reservations.push(reservation);
        }
    }

    addPurchase(purchase) {
        this.purchases.push(purchase);
    }

    hasReserveAllocation() {
        return this.reservations.length < 3;
    }

    findFromArray(array, keyWord) {
        return array.find(doc => doc.shoes.name === keyWord);
    }

    removeFromArray(array, description) {
        const item = this.findFromArray(array, description);
        const index = array.indexOf(item);
        array.splice(index, 1);
    }

    reservationIsFullfilled(reservation) {
        this.removeFromArray(this.reservations, reservation.name);
    }

    hasReservedItem(itemName) {
        // return this.reservations.includes(item);
        const item = this.findFromArray(this.reservations, itemName);
        if (item) {
            return true;
        }
        return false;
    }

    hasBoughtItem(itemDesc) {
        const item = this.findFromArray(this.purchases, itemDesc);
        if (item) {
            return true;
        }
        return false;
    }

}