import setupService from './setupService';
import restrictorHook from '../hooks/restrictor';
import transformHook from '../hooks/transform';
import validateHook from '../hooks/validate';
import Purchase from '../models/Purchase';
import loggerHook from '../hooks/logger';
import adminValidatorHook from '../hooks/adminValidator';

function setupPurchaseService(db) {
   
        const beforeHook = {
            find: [restrictorHook()],
            get : [restrictorHook()],
            update : [restrictorHook({idField : 'username', ownerField: 'account'})],
            create : [transformHook(Purchase), validateHook(db, 'reservations'), ],
        };
        const afterHook = {
            find : [transformHook(Purchase)],
            get : [transformHook(Purchase)],
        };
        return setupService(db, '/api/purchases', 'purchases', beforeHook, afterHook);
    
}

export default setupPurchaseService;