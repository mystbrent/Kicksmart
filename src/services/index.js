import setupService from './setupService';
import setupAuth from './authentication';
import { hooks } from 'feathers-authentication-local';
import setupShoesService from './shoes';
import setupUsersService from './users';
import setupPromoService from './promo';
import setupPurchaseService from './purchase';
import setupReviewService from './review';
import setupReservationService from './reservation';
import setupShopService from './shop';

function setupAllServices(db) {
    return function createPlugin() {
        const app = this;

        app            
            .configure(setupAuth())
            .configure(setupShoesService(db))
            .configure(setupUsersService(db))
            .configure(setupPromoService(db))
            .configure(setupPurchaseService(db))
            .configure(setupReviewService(db))
            .configure(setupReservationService(db))
            .configure(setupShopService(db));
    }
}

export default setupAllServices;