import {describe, it} from 'mocha';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Shoes from '../models/Shoes';
import Promo from '../models/Promo';
import Review from '../models/Review';

chai.should();

describe('#Shoes', () => {

    describe('#priceIsWithin', () => {
        it('should return true if the price of the shoes is 1500 and the selected minimum is 1000 and maximum of 2000.', () => {
            const shoes = new Shoes({
            name : 'Sample Shoes',
            price : 1500.00,
            });
        
            shoes.priceIsWithin(1000, 2000).should.be.true;
        });
    });

    describe('#getPromoDiscount', () => {
        it('should get a 150 discount for two promos which gives a 10% and 5% discounts if the price of the shoes is 1000', () => {
            const promo1 = new Promo({
                desc : 'Buy more to save more',
                coveredShoes : [],
                discount : 0.05,
            });

            const promo2 = new Promo({
                desc : 'Buy more to save more',
                coveredShoes : [],
                discount : 0.1,
            });
            const shoes = new Shoes({
            name : 'Sample Shoes',
            price : 1000.00,
            promos : [promo1, promo2,],
            });
        
            promo1.coveredShoes = [shoes,]
            promo2.coveredShoes = [shoes,]
            shoes.getPromoDiscount().should.be.closeTo(150, 0.05);
        });
    });

    describe('#getAverageRating', () => {
        it('should get an average rating of 4 if the reviews rating of this shoe is 3, 4, and 5.', () => {
            const review1 = new Review({rating : 3});
            const review2 = new Review({rating : 4});
            const review3 = new Review({rating : 5});
            let shoes = new Shoes({
            name : 'Sample Shoes',
            reviews : [review1, review2, review3,],
            });
        
            Object.assign(review1, {shoes});
            Object.assign(review2, {shoes});
            Object.assign(review3, {shoes});
            shoes.getAverageRating().should.be.closeTo(4, 0.05);

        });
    });

    describe('#hasGoodReviews', () => {
        it('should be true if every reviews of this shoes are 8 and above.', () => {
            const review1 = new Review({rating : 9});
            const review2 = new Review({rating : 8});
            const review3 = new Review({rating : 10});
            let shoes = new Shoes({
            name : 'Sample Shoes',
            reviews : [review1, review2, review3,],
            });
        
            Object.assign(review1, {shoes});
            Object.assign(review2, {shoes});
            Object.assign(review3, {shoes});
            shoes.hasGoodReviews().should.be.true;
        });
    });

    describe('#getTotalQuantity', () => {
        it('should get a total of 76 for all shoes', () => {
            const shoes = new Shoes({
                name : 'Sample Shoes',
                availableColors : [
                    {color : 'black', quantity : 42},
                    {color : 'white', quantity : 61},
                    {color : 'gray', quantity : 66}
                ]
            });
            shoes.getTotalQuantity().should.equals(169);
        });
    });

    describe('#hasSizeAvailable', () => {
        it ('should have an available 9 if availableSizes array has size 9 inside it', () => {
            const shoes = new Shoes({
            availableSizes : [
                {size : 7, quantity : 51},
                {size : 9, quantity :81}
                ]
        });
            shoes.hasSizeAvailable(9).should.be.true;
        })
    })

});