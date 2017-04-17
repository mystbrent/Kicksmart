import createServer from '../src/app';
import {describe, it, beforeEach, afterEach} from 'mocha';
import sinon from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';

chai.should();
chai.use(chaiAsPromised);

describe('Services', () => {

    let app; 

  describe('Users', () => {
               
        beforeEach(async() => {
            if (app === undefined) {
                app = await createServer();            
            }
        });
        const sampleAccount = {
            _id : 'qwertyuiop1234',
            username : 'sampleusername',
            password : 'password',
            passwordConfirmation : 'password',
            email : 'sampleEmail@gmail.com',
            address : 'sample address',
            name : 'Sample Name',
            type : 'Regular',
        }
        it('can create a document if valid and save it to the database', async () => {
            const userService = app.service('/api/accounts');           
            const creation = await userService.create(sampleAccount);
            Promise.resolve(creation).should.eventually.not.be.rejected;
        });
        it('can patch an existing account if authorized', async() => {
            const userService = app.service('/api/accounts'); 
            const removal = await userService.patch(sampleAccount._id, {email : 'hackedEmail@gmail.com'}, {user : {type : 'Admin'}});
            Promise.resolve(removal).should.eventually.not.be.rejected;
        })
        it('can remove an existing account if authorized', async() => {
            const userService = app.service('/api/accounts'); 
            const removal = await userService.remove(sampleAccount._id, {user : {type : 'Admin'}});
            Promise.resolve(removal).should.eventually.not.be.rejected;
        });
    });

    describe('Shoes', () => {

        const sampleShoes = {
            _id : 'qwertyuiop123',
            brand : 'Nike',
            gender : 'Men',
            brandIcon : 'images/brand.jpg',
            image : 'images/image.jpg',
            name : 'Sample Shoes',
            price : 6000,
            tags : 'Running',
            availableColors : [{color : 'red', quantity : 41} , {color : 'black', quantity : 23}],
            availableSizes : [{size : 8, quantity : 41}, {size : 10, quantity : 23}],
        };

        it('can create new shoes if valid and authorized', async () => {
            const service = app.service('/api/shoes');
            const query = await service.create(sampleShoes, {user : {type : 'Admin'}});
            Promise.resolve(query).should.eventually.not.be.rejected;
        });

        it('can patch a shoes if authorized', async () => {
            const service = app.service('/api/shoes');
            const query = await service.patch(sampleShoes._id, {gender : 'Women'}, {user : {type : 'Admin'}});
            Promise.resolve(query).should.eventually.not.be.rejected;
        })

        it('can remove a shoes if authorized', async () => {
            const service = app.service('/api/shoes');
            const query = await service.remove(sampleShoes._id, {user : {type : 'Admin'}});
            Promise.resolve(query).should.eventually.not.be.rejected;
        });

    });

    describe('Reservations', () => {

        const sampleReservation = {
            _id : 'qwertyuiop123',
            name : 'brenttudas-SampleShoes-8-red',
            account : {
                username : 'brenttudas'
                      },
            color : 'red',
            size : 8,
            dateReserved : new Date(Date.now()),
            shoes : {
                name : 'SampleShoes',
            }
        };

        it('can create new reservation if valid', async () => {
            const service = app.service('/api/reservations');
            const query = await service.create(sampleReservation, {user : {type : 'Admin'}});
            Promise.resolve(query).should.eventually.not.be.rejected;
        });

        it('can patch a reservation if authorized', async () => {
            const service = app.service('/api/reservations');
            const query = await service.patch(sampleReservation._id, {color : 'blue'}, {user : {type : 'Admin'}});
            Promise.resolve(query).should.eventually.not.be.rejected;
        })

        it('can remove a reservation if authorized', async () => {
            const service = app.service('/api/reservations');
            const query = await service.remove(sampleReservation._id, {user : {type : 'Admin'}});
            Promise.resolve(query).should.eventually.not.be.rejected;
        });

    });

    describe('Purchases', () => {

        const samplePurchase = {
            _id : 'qwertyuiop123',
            name : 'brenttudas-SampleShoes-8-red',
            account : 'brenttudas',
            color : 'red',
            size : 8,
            datePurchased : new Date(Date.now()),
            shoes : {
                name : 'SampleShoes',
            },
            address : 'Makati City',
        };

        it('can create new purchase if valid', async () => {
            const service = app.service('/api/purchases');
            const query = await service.create(samplePurchase, {user : {type : 'Admin'}});
            Promise.resolve(query).should.eventually.not.be.rejected;
        });

        it('can patch a purchase if authorized', async () => {
            const service = app.service('/api/purchases');
            const query = await service.patch(samplePurchase._id, {color : 'blue'}, {user : {type : 'Admin'}});
            Promise.resolve(query).should.eventually.not.be.rejected;
        })

        it('can remove a purchase if authorized', async () => {
            const service = app.service('/api/purchases');
            const query = await service.remove(samplePurchase._id, {user : {type : 'Admin'}});
            Promise.resolve(query).should.eventually.not.be.rejected;
        });

    });

    describe('Promos', () => {

        const samplePromo = {
            _id : 'qwertyuiop123',
            name : 'samplePromo',
            discount : 0.8,
            startDate : new Date('2017-4-23'),
            endDate : new Date('2017-5-22'),
            shoes : ['SampleShoes1', 'SampleShoes2'],
        };

        it('can create new promo if valid and authorized', async () => {
            const service = app.service('/api/promos');
            const query = await service.create(samplePromo, {user : {type : 'Admin'}});
            Promise.resolve(query).should.eventually.not.be.rejected;
        });

        it('can patch a promo if authorized', async () => {
            const service = app.service('/api/promos');
            const query = await service.patch(samplePromo._id, {discount : 0.3}, {user : {type : 'Admin'}});
            Promise.resolve(query).should.eventually.not.be.rejected;
        })

        it('can remove a promo if authorized', async () => {
            const service = app.service('/api/promos');
            const query = await service.remove(samplePromo._id, {user : {type : 'Admin'}});
            Promise.resolve(query).should.eventually.not.be.rejected;
        });

    });

});