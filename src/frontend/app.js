import feathers from 'feathers';
import feathersSocketio from 'feathers-socketio';
import nativeSocketio from 'socket.io-client';
import hooks from 'feathers-hooks';
import authentication from 'feathers-authentication-client';

const host = location.host
const protocol = host.startsWith('local') ? 'http' : 'https';
let url = `${protocol}://${location.host}`;
console.log(url, ' da url');
if(window.cordova) {
    // url = 'http://169.254.48.107:3000';
    url = 'http://192.168.1.100:8000';
    alert(url)
}
// url = 'http://192.168.1.3:3000';
// const socketConnection = nativeSocketio(`${protocol}://${host}`);

const socketConnection = nativeSocketio(url);
const app = feathers()
    .configure(hooks())
    .configure(feathersSocketio(socketConnection))
    .configure(authentication({ storage: localStorage }));

window.app = app;

export default app;                 