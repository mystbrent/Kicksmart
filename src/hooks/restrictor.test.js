import 'babel-polyfill';
import chai, {should} from 'chai';
import {describe, it, beforeEach, afterEach} from 'mocha';
import sinon from 'sinon';
import restrictorHook from './restrictor';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';


should();
chai.use(sinonChai);
chai.use(chaiAsPromised);

   const auth =
      { path: '/api/auth',
        header: 'Authorization',
        entity: 'user',
        service: '/api/accounts',
        passReqToCallback: true,
        session: false,
        secret: 'SUPERCALIFRAGILISTICEXPIADOLICOUS20020202014',
        authenticated: true,
        user: {
            _id: '58dd1cb13f0f2a0f98886452',
            username: 'brenttudas',
        },
        payload: ['58dd1cb13f0f2a0f98886452'] };

    const data = {type : 'before',
                params : {provider : 'socketio', user : {username : 'sampleUsername', _id : '58dd1cb13f0f2a0f98886452'}},
                get : function() {

                },
                app : {
                    get : function() {

                    }
                },
                };

describe('#Restrictor', () => {

    let getStub;
    beforeEach(() => {
        getStub = sinon.stub(data.app, 'get');
    });

    afterEach(() => {
        getStub.restore();
    });

    // it('should be able to restrict users to their own stuffs.', async () => {
    //     getStub.returns(auth);
    //     async function execute() {
    //         await restrictorHook()(data);
    //     }

    //     console.log(await execute(), ' lala la')

    // });

});