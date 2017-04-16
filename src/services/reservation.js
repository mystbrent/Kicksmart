import setupService from './setupService';
import transformHook from '../hooks/transform';
import validateHook from '../hooks/validate';
import cleanerHook from '../hooks/cleaner';
import timerHook from '../hooks/timer';
import loggerHook from '../hooks/logger';
import restrictorHook from '../hooks/restrictor';
import adminValidatorHook from '../hooks/adminValidator';
import Reservation from '../models/Reservation';


function setupReservationService(db) {
   
        const app = this;
        const beforeHook = {
            find: [restrictorHook()],
            get : [restrictorHook()],
            update : [restrictorHook()],
            create : [transformHook(Reservation), validateHook(db, 'reservations'), loggerHook(db),  cleanerHook(),],
            patch:[restrictorHook()]
            
        };
        const afterHook = {
            find : [transformHook(Reservation), timerHook(db),],
            get : [ transformHook(Reservation), timerHook(db), ],
        };
        return setupService(db, '/api/reservations', 'reservations', beforeHook, afterHook);
    
}

export default setupReservationService;