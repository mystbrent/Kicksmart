import {describe, it} from 'mocha';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Account from '../models/Account';

chai.should();

describe('Account', () => {

    describe('#hasReserveAllocation', () => {
        const acc = new Account({
                reservations : [],
                pendingDeliveries : [],
                purchases : [],
                reviews : [],
            });

        it('should have reserve allocation if the account only has 2 pending reservations', () => {
            const account = new Account({
                reservations : [{account : acc}, {account : acc},],
                pendingDeliveries : [],
                purchases : [],
                reviews : [],
            });

            account.hasReserveAllocation().should.be.true;

        });

        it('should have no reserve allocation if the account has 3 or more pending reservations', () => {
            const account = new Account({
                reservations : [{account : acc}, {account : acc}, {account : acc}],
                pendingDeliveries : [],
                purchases : [],
                reviews : [],
            });

            account.hasReserveAllocation().should.be.false;

        });

    });

    describe('#addReservation', () => {
        let hasReserveAllocationStub;

        beforeEach(() => {
            hasReserveAllocationStub = sinon.stub(Account.prototype, 'hasReserveAllocation');
        });

        afterEach(() => {
            hasReserveAllocationStub.restore();
        });

        it('should push a value to reservations array if user has reserve allocation.', () => {
            const account = new Account({
                reservations : [],
                pendingDeliveries : [],
                purchases : [],
                reviews : [],
            });
            hasReserveAllocationStub.returns(true);
            const reservation = {reservation : 'sample reservation'};
            account.addReservation(reservation);
            account.reservations.should.have.members([reservation]);

        });

        it('should not push a value to reservations array if user has no reserve allocation.', () => {
            const account = new Account({
                reservations : [],
                pendingDeliveries : [],
                purchases : [],
                reviews : [],
            });
            hasReserveAllocationStub.returns(false);
            const reservation = {reservation : 'sample reservation'};
            account.addReservation(reservation);
            account.reservations.should.have.not.members([reservation]);
            
        });
        
    });

    describe('#findFromArray', () => {

        it('should be able to find an item specified in an array which contains it.', () => {
            const reservation = {shoes : {name : 'sample delivery'}};
            const account = new Account({
                reservations : [reservation],
                purchases : [],
                reviews : [],
            });
            account.findFromArray(account.reservations, 'sample delivery' ).should.deep.equal(reservation);
        });

        // it('should not be able to find an item specified in an array which does not contain it.', () => {
        //     const delivery = {desc : 'sample delivery'};
        //     const account = new Account({
        //         reservations : [],
        //         pendingDeliveries : [delivery,],
        //         purchases : [],
        //         reviews : [],
        //     });
        //     account.findFromArray(account.pendingDeliveries, 'free delivery', 'desc').should.be.not.ok;
        // });

    });

    describe('#removeFromArray', () => {

        it('should be able to remove an item from an array', () => {

        });
        
    });

});