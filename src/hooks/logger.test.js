import 'babel-polyfill';
import Joi from 'joi';
import chai, {should} from 'chai';
import {describe, it, beforeEach, afterEach} from 'mocha';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
import logger from './logger';

should();
chai.use(sinonChai);
chai.use(chaiAsPromised);


describe('Logger Hook', () => {
    const findStub = sinon.stub();

    const account = {
        username: 'TestAccount',
        reservations : [],
        purchases : [],
        reviews: [],
    }

        const data = {
            type: 'after',
            result: account,
            path: 'api/accounts',
            app: {
                services: {
                    'api/reservations': {
                        find: findStub,
                    },
                    'api/purchases': {
                        find: findStub,
                    },
                    'api/reviews': {
                        find: findStub,
                    },
                    'api/promos': {
                        find: findStub,
                    },
                }
            }
        };
    


    it('should be able to log an accounts transcations', async () => {
        findStub.returns([
            {name :'sampleData1'}, {name : 'sampleData2'}
        ])
         function execute() {
            return logger()(data);
        }
        const hook =  await execute();
        data.result.should.deep.equal({
            username : 'TestAccount',
            reservations : [{name : 'sampleData1'}, {name : 'sampleData2'}],
            purchases : [{name : 'sampleData1'}, {name : 'sampleData2'}],
            reviews : [{name : 'sampleData1'}, {name : 'sampleData2'}],
        });
    })
})