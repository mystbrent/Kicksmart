import Shoes from './Shoes';
import Joi from 'joi';
import Model from './Model';

export default class Review extends Model {

    constructor(doc) {
        // Object.assign(this, doc);
        super(doc);
        this.shoes = new Shoes(this.shoes);
    }

    static get schema() {
        return {
            shoes : Joi.string().regex(/^[a-zA-Z`', -]{4,30}$/).required(),
            account : Joi.string().alphanum().min(7).max(30).required(),
            rating : Joi.number().integer().positive().required(),
            comments : Joi.array(),
            desc : Joi.string().regex(/^[a-zA-Z`', -]{1,30}$/).required(),
        }
    }

    isGoodReview() {
       return this.rating >= 3;
    }

    

}