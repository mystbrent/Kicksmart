import auth from 'feathers-authentication';
import local from 'feathers-authentication-local';
import jwt from 'feathers-authentication-jwt';

function setupAuthService() {
    return function createPlugin() {
        this
            .configure(auth(this.get('auth')))
            .configure(local({
                usernameField : "username",
                passwordField : "password",
            }))
            .configure(jwt())

    this.service('/api/auth').before({     
        create: [
            auth.hooks.authenticate(['jwt', 'local'])
        ],
        remove: [
            auth.hooks.authenticate('jwt')
        ]
    });
    }
}

export default setupAuthService;