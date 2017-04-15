import Shoes from './Shoes';
import Joi from 'joi';
import Model from './Model';

export default class Promo extends Model{
    constructor(doc) {
        // Object.assign(this, doc);
        super(doc);
        this.transformArray(this.shoes, Shoes);
        this.startDate = new Date(this.startDate);
        this.endDate = new Date(this.endDate);
    }

    static get schema() {
        return {
            _id : Joi.string(),
            name : Joi.string().required(),
            discount : Joi.number().required().positive(),
            shoes : Joi.array().required(),
            startDate : Joi.date(),
            endDate : Joi.date()
        }
    }

    transformArray(array, modelClass) {
        if (array) {
            array = array.map(doc => new modelClass(doc));
        }
    }

    getFormattedStartDate() {
        return this.startDate.toDateString();
    }

    getFormattedEndDate() {
        return this.endDate.toDateString();
    }

    hasExpired() {
        const today = new Date(Date.now());
        return this.startDate < today && today > this.endDate;
    }

    getRandomIndex(from, to) {
        return Math.trunc(Math.random() * (to - from + 1)) + from;
    }

    findShoes(name) {
        const shoes = this.shoes.find(shoe => shoe.name === name);
        return shoes;
    }


    getPromoMechanics() {
        
    }
    
}