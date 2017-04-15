import { hooks } from 'feathers-authentication-local';
import Account from '../models/Account';
import transformHook from '../hooks/transform';
import loggerHook from '../hooks/logger';
import removerHook from '../hooks/remover';
import validateHook from '../hooks/validate';
import restrictorHook from '../hooks/restrictor';
import feathersMongo from 'feathers-mongodb';
import adminValidatorHook from '../hooks/adminValidator';
import timerHook from '../hooks/timer';

function setupUsersService(db) {
    return function createPlugin() {
        const app = this;
        const beforeHook = {
            create : [
                transformHook(Account),                
                hooks.hashPassword({passwordField : 'password'}),
                ],
            update : [
                transformHook(Account),                
                hooks.hashPassword({passwordField : 'password'}),
                ],
        };
        const afterHook = {
            find : [
                transformHook(Account),
                loggerHook(db),
                removerHook(),
            ],
            get : [
                transformHook(Account),
                loggerHook(db),
                removerHook(),
            ],
        };

        app.use('/api/accounts', feathersMongo({ Model: db.collection('accounts') }));

        const service = app.service('/api/auth');
        const service2 = app.service('api/accounts');
        service2.filter(function(data, connection, hook) {});
        service.filter(function(data, connection, hook) {});
        service.after(afterHook);
        service.before(beforeHook);
        service2.after({
            find : [transformHook(Account), loggerHook(db), removerHook(),],
            get : [transformHook(Account), loggerHook(db), removerHook(), ],
        });
        service2.before({
            create : [
                transformHook(Account),                 
                validateHook(db, 'accounts'),
                (hookDetails) => {
                    Reflect.deleteProperty(hookDetails.data, 'passwordConfirmation');
                    return hookDetails;
                },               
                hooks.hashPassword({passwordField : 'password'}),
                ],
            get : [restrictorHook({idField : '_id', ownerField : '_id'}), ],
            find : [restrictorHook({idField : '_id', ownerField : '_id'}),],
            update : [
                hooks.hashPassword({passwordField : 'password'}),
                restrictorHook({idField : 'username', ownerField: 'account'}),
            ],
            patch : [
                hooks.hashPassword({passwordField : 'password'}),
                restrictorHook({idField : 'username', ownerField: 'account'}),
            ],
            remove : [adminValidatorHook()]
        });
        
    }
}
export default setupUsersService;
