import Promo from './Promo';
import Review from './Review';
import Model from './Model';
import Joi from 'joi';

export default class Shoes extends Model{
    constructor(doc) {
        super(doc);
        this.transformArray(this.promos, Promo);
        this.transformArray(this.reviews, Review);
        if (this.availableColors) {
        this.quantity = this.getTotalQuantity();
        }
        // if (this.price) {
        // this.price = Number(this.price.toFixed(2));
        // }
    }

    static get schema() {
        return {
            _id : Joi.string(),
            brand : Joi.string().required(),
            gender : Joi.string().regex(/^Men|Women$/i).required(),
            brandIcon : Joi.string().required(),
            image : Joi.string().required(),
            name : Joi.string().regex(/^[a-zA-Z`', -]{4,30}$/).required(),
            price : Joi.number().positive(),
            quantity : Joi.number().integer().positive(),
            availableColors : Joi.array(),
            availableSizes : Joi.array(),

        }
    }
    
    transformArray(array, modelClass) {
        if (array) {
        array = array.map(doc => new modelClass(doc));
        }
    }

    priceIsWithin(min, max) {
        return this.price >= min && this.price <= max;
    }

    isWithinBudget(budget) {
        return this.price <= budget;
    }

    isAvailable() {
        return this.quantity > 0;
    }

    canAccomodate(pieces) {
        return this.quantity >= pieces;
    }

    findFromArray(array, keyWord, prop) {
        return array.find(doc => doc[prop] === keyWord);
    }

    getTotalQuantity() {
        // let quantity = 0;
        const quantity = this.availableColors.reduce((total, doc) => {
            return total + doc.quantity;
        }, 0);
        return quantity;
    }

    hasSizeAvailable(prefferedSize) {
        const array = this.availableSizes.filter(shoes => (shoes.size === prefferedSize && shoes.quantity > 0));
        if(array.length > 0) {
            return true;
        }
        return false;
    }

    hasColorAvailable(prefferedColor) {
        const array = this.availableColors.filter(shoes => (shoes.color === prefferedColor && shoes.quantity > 0));
        if(array.length > 0) {
            return true;
        }
        return false;
    }

    hasPromo() {
        return this.promos.length > 0;
    }

    hasReview() {
        return this.reviews.length > 0;
    }

    getPromoDiscount() {
        const allDiscount = this.promos.reduce((total, promo) => {
            return total + (this.price * promo.discount);
        }, 0);
        return allDiscount;
    }

    getTotalPrice() {
        // const total = (this.price + this.vatablePrice) - this.getPromoDiscount();
        const total = this.price - this.getPromoDiscount();
        return Math.round(total);
    }

    get vatablePrice() {
        return this.price / 1.12;
    }

    getSum(total, value) {
        total = total + value;
    }

    getAverageRating() {
        let total = 0;
        if (this.hasReview()) {
        const totalRating = this.reviews.reduce((total, review) => {
            return total += review.rating
        }, 0);
        total = totalRating / this.reviews.length;              
        }
        return total;
    }

    isTrending() {
        return this.reviews.length >= 8;
    }

    hasGoodReviews() {
        return this.reviews.every(review => review.rating >= 7);
    }
}