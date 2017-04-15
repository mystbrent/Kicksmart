import Account from './Account';
import Joi from 'joi';
import Model from './Model';

export default class Purchase extends Model {
    constructor(doc) {
        super(doc);
        this.datePurchased = new Date(this.datePurchased);
    }

    static get schema() {
        return {
            _id : Joi.string(),
            name : Joi.string().required(),
            account : Joi.string().required(),
            address : Joi.string().required(),
            shoes : Joi.object().required(),
            color: Joi.string().required(),
            size : Joi.number().integer().positive().required(),
            datePurchased : Joi.date().required(),
        }
    }

    getFormattedDate() {
        const date = new Date(this.datePurchased);
        return date.toDateString();
    }

    
}