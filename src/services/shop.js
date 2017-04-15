import transformHook from '../hooks/transform';
import Shoes from '../models/Shoes';
import {ObjectId} from 'mongodb';
import shoeSetterHook from '../hooks/shoeSetter';
import validateHook from '../hooks/validate';
import setupService from './setupService';
import loggerHook from '../hooks/logger';

function setupShopService(db) {
    return function createPlugin() {
        const app = this;

        app.use('/api/shop', {

            // async find(params) {
            //     // db.collection([params.query.collection] + '').find().toArray();
            //     // const graph = await db.collection([params.query.collection] + '').aggregate( [ { $group : { _id : "$shoes.name" } } ]);
            //     // const graph = await db.collection([params.query.collection] + '').aggregate(
            //     // [
            //     //     { $group : { _id : "$shoes.name", books: { $push: "$account" } } }
            //     // ]
            //     // )
            //     // console.log(graph)
            //     // return graph;
            //     return await db.collection('shoes').find({}, {name : 1, _id : 0}).toArray();
            // },

            async create(data, params) {
                const id = data.shoes._id;
                const color = data.color;
                const size = data.size;
                  const shoes =   await db.collection('shoes').update(
                     {_id : ObjectId(id), "availableSizes.size" : parseInt(size), "availableColors.color" : color},
                     {$inc : {"availableSizes.$.quantity" : -1, "availableColors.$.quantity" : -1, quantity : -1 }},true);
                const purchaseService = app.service('/api/purchases');
                await app.service('/api/reservations').remove(data._id);
                Reflect.deleteProperty(data, '_id');
                Reflect.deleteProperty(data, 'dateReserved');
                // const purchase = await purchaseService.create(Object.assign(data, {datePurchased : new Date(Date.now())}));
                const purchase = await purchaseService.create(data);
                 return purchase;
            }
        });

        const service = app.service('/api/shop');
        service.before({
            create : [transformHook(Shoes)],
        });
        service.after({
            // create: [identifierHook(db), loggerHook(db)],
        // find : [shoeSetterHook(db), transformHook(Shoes),],
        //  get : [shoeSetterHook(db), transformHook(Shoes),],
        });
    }
}


export default setupShopService;