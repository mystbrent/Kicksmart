import feathersMongo from 'feathers-mongodb';
import transformHook from '../hooks/transform';
import Shoes from '../models/Shoes';
import shoeSetterHook from '../hooks/shoeSetter';
import validateHook from '../hooks/validate';
import setupService from './setupService';
import adminValidatorHook from '../hooks/adminValidator';
import restrictHook from '../hooks/restrictor';

function setupShoesService(db) {
    const beforeHook = {
        create : [transformHook(Shoes), validateHook(db, 'shoes'), adminValidatorHook()],
        patch:[adminValidatorHook(),],
        update:[adminValidatorHook(),],
        remove:[adminValidatorHook(),],
    };
    const afterHook = {
        find : [shoeSetterHook(), transformHook(Shoes),],
         get : [shoeSetterHook(), transformHook(Shoes),]
        };
    return new setupService(db, '/api/shoes', 'shoes', beforeHook, afterHook);
}

export default setupShoesService;