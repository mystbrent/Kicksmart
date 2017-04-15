import path from 'path';

import feathers from 'feathers';
import feathersMongo from 'feathers-mongodb';
import { MongoClient } from 'mongodb';
import hooks from 'feathers-hooks';
import rest from 'feathers-rest';
import configuration from 'feathers-configuration';
import socketio from 'feathers-socketio';
import bodyParser from 'body-parser';
import setupAllServices from './services';
import errorHandler from 'feathers-errors/handler';

const app = feathers();

app
    .configure(configuration(process.cwd()))
    .configure(hooks())
    .configure(rest())
    .configure(socketio())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(feathers.static(path.join(process.cwd(), 'public')));
        
const createServer = async () => {
    const db = await MongoClient.connect(app.get('mongoURI'));
    app.configure(setupAllServices(db));
    app.use(errorHandler());
    return app;
};

export default createServer;