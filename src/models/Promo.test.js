import {describe, it} from 'mocha';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Promo from '../models/Promo';
import Shoes from '../models/Shoes';

chai.should();

describe('#Promo', () => {

    describe('#isStillOngoing', () => {
        let dateStub;
        
        beforeEach(() => {
            dateStub = sinon.stub(Date, 'now');
        });

        afterEach(() => {
            dateStub.restore();
        });

        it('should return true if today is 3/17/2017 and the start date is 3/15/2017 and end date is 3/28/2017', () => {
            const today = 1489680000000; //3/17/2017
            dateStub.returns(today);
            const promo = new Promo({
                startDate : new Date('2017-3-14'),
                endDate : new Date('2017-3-27'),
                coveredShoes : [],
            });
            promo.hasExpired().should.be.false;
        });

        it('should return false if today is 3/20/2017 and the start date is 3/10/2017 and end date is 3/16/2017', () => {
            const today = 1489939200000; //3/20/2017
            dateStub.returns(today);
            const promo = new Promo({
                startDate : new Date('2017-3-9'),
                endDate : new Date('2017-3-15'),
                coveredShoes : [],
            });
            promo.hasExpired().should.be.true;
        });
        
    });

});