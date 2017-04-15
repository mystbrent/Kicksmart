import 'babel-polyfill';
import Joi from 'joi';
import chai, {should} from 'chai';
import {describe, it, beforeEach, afterEach} from 'mocha';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
import shoeSetter from './shoeSetter';

should();
chai.use(sinonChai);
chai.use(chaiAsPromised);

describe('shoeSetter Hook', () => {

    const findStub = sinon.stub();
    const fakeShoes = {
        name: 'Sample Shoes',
    };

    const data = {
            type: 'after',
            result: fakeShoes,
            params: {
                user: {
                    username: 'Sample Account',
                    type: 'Regular'
                }
            },
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

    it('should be able to set shoes involvement in transactions', async() => {
        
        findStub.returns({
            items : ['Sample Shoes', 'SampleShoes2'],
            name : 'sampleTransaction',
        },
        {
            items : ['Sample Shoes', 'SampleShoes2'],
            name : 'sampleTransaction2',
        }
        );
        async function execute() {
            await shoeSetter()(data);
        }

        const hook = await execute();
        data.result.should.deep.equal({
            name : 'Sample Shoes',
            promos : {
                items : [
                    "Sample Shoes",
                    "SampleShoes2",
                ],
                name : "sampleTransaction"
            },
            purchases : {
                items : [
                    "Sample Shoes",
                    "SampleShoes2",
                ],
                name : "sampleTransaction"
            },
            reservations : {
                items : [
                    "Sample Shoes",
                    "SampleShoes2",
                ],
                name : "sampleTransaction"
            },
            reviews : {
                items : [
                    "Sample Shoes",
                    "SampleShoes2",
                ],
                name : "sampleTransaction"
            }
        })    

    })

});


