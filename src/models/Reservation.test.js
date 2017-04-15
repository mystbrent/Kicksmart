import {describe, it} from 'mocha';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Reservation from '../models/Reservation';

chai.should();

describe('Reservation', () => {

    describe('#getTimeRemaining', () => {
            let timeStub;  

            beforeEach(() => {
                timeStub = sinon.stub(Date, 'now');
                
            });      

            afterEach(() => {
                timeStub.restore();
            });

        it('should get the remaining time for the reservation if still within 3 days', () => {
            timeStub.returns(new Date('2017-3-3').getTime());
            const reservation = new Reservation({
                dateReserved : new Date('2017-3-2')
                // dateReserved : new Date('2017-3-2').getTime()
            });
            // console.log(reservation.getTimeRemaining())
            reservation.getTimeRemaining().should.be.equal(86400000)
        });

        it('should get 0 remaining time for the reservation if not still within 3 days', () => {
            timeStub.returns(new Date('2017-3-5').getTime());
            const reservation = new Reservation({
                dateReserved : new Date('2017-3-2')
                // dateReserved : new Date('2017-3-2').getTime()
            });
            // console.log(reservation.getTimeRemaining())
            reservation.getTimeRemaining().should.be.equal(0)
        });
        
    });



});