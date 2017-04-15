import setupService from './setupService';
import transformHook from '../hooks/transform';
import Promo from '../models/Promo';
import timerHook from '../hooks/timer';
import adminValidatorHook from '../hooks/adminValidator';
import validateHook from '../hooks/validate';

function setupPromoService(db) {
    
        const beforeHook = {
                create : [adminValidatorHook(), transformHook(Promo), validateHook(db, 'promos')],
                remove :[adminValidatorHook(),],

        };
        const afterHook = {
                find : [transformHook(Promo), timerHook(db)],
                get : [transformHook(Promo), timerHook(db)],
        };
        return setupService(db, '/api/promos', 'promos', beforeHook, afterHook);
    
}

export default setupPromoService;