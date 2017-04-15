import Account from './Account';
import Model from './Model';
import Joi from 'joi';

export default class Reservation extends Model {
    constructor(doc) {
        super(doc);
        this.dateReserved = new Date(this.dateReserved);
    }

    static get schema() {
        return {
            _id : Joi.string(),
            name : Joi.string().required(),
            account : Joi.object().required(),
            shoes : Joi.object().required(),
            color: Joi.string().required(),
            size : Joi.number().integer().positive().required(),
            dateReserved : Joi.date().required(),
        }
    }

    getFormattedDate() {
        const date = new Date(this.dateReserved);
        return date.toDateString();
    }

    getTimeRemaining() {
        const threeDays = 259200000;
        const now = Date.now();
        const timeRemaining = (now - this.dateReserved.getTime()) >= threeDays ? 0 : (now - this.dateReserved.getTime());
        return timeRemaining;
    } 

    hasExpired() {
        return this.getTimeRemaining() <= 0;
    }
}