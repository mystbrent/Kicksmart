import setupService from './setupService';
import adminValidatorHook from '../hooks/adminValidator';

function setupReviewService(db) {
        const beforeHook = {
                
        };
        const afterHook = {

        };
        return setupService(db, '/api/reviews', 'reviews', beforeHook, afterHook);
}

export default setupReviewService;