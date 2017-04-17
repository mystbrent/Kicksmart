import transformHook from '../hooks/transform';
import Shoes from '../models/Shoes';
import {ObjectId} from 'mongodb';
import setupService from './setupService';

function setupShopService(db) {
    return function createPlugin() {
        const app = this;

        app.use('/api/shop', {


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
                const purchase = await purchaseService.create(data);
                 return purchase;
            }
        });

        const service = app.service('/api/shop');
        service.before({
            create : [transformHook(Shoes)],
        });
    }
}


export default setupShopService;