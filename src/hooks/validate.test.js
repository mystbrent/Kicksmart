import 'babel-polyfill';
import Model from '../models/Model';
import Joi from 'joi';
import chai, {should} from 'chai';
import {describe, it, beforeEach, afterEach} from 'mocha';
import validateHook from './validate';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';


should();
chai.use(sinonChai);
chai.use(chaiAsPromised);

describe('Validate Hook', () => {
    class Dummy extends Model {
        static get schema() {
            return {
                username: Joi.string().alphanum().min(7).max(30).required(),
                password: Joi.string().regex(/^[a-zA-Z0-9]{7,30}$/).required(),
            };
        }
    }
        const collectionStub = sinon.stub();
        const findStub = sinon.stub();
        const toArrayStub = sinon.stub()

        const fakeDb = {
            collection : collectionStub
        }

            fakeDb.collection.returns({
                find : findStub,
            });
            findStub.returns({
                toArray : toArrayStub
            })

    it('throws on given invalid data and not unique document', () => {
        const dummy = new Dummy({username : 'brent1234', password: '#password'});        
        toArrayStub.returns(Promise.resolve([{palagpat : 'obj'}]));
        async function execute() {
             await validateHook(fakeDb, 'accounts')({type : 'before', data : dummy});
        }
        // execute.should.eventually.rejectedWith('The object is either not valid or has a duplicate entry.');
        Promise.resolve(execute()).should.eventually.rejectedWith('The object is either not valid or has a duplicate entry.');
    });

    it ('throws on given invalid data and unique document', () => {
        const dummy = new Dummy({username : 'brent1234', password: '#password'});
        toArrayStub.returns(Promise.resolve([]));
        async function execute() {
            await validateHook(fakeDb, 'accounts')({type : 'before', data : dummy});
        }
        // execute().should.throw('Data is invalid.');
        Promise.resolve(execute()).should.eventually.rejectedWith('Data is invalid.');
    });

    it('does not throw on given valid data and unique document', () => {
        const dummy = new Dummy({username : 'brent1234', password: 'password'});
        toArrayStub.returns(Promise.resolve([]));
        async function execute() {
            await validateHook(fakeDb, 'accounts')({type : 'before', data : dummy});
        }
        Promise.resolve(execute()).should.eventually.not.rejected;
    });

});