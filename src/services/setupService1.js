import feathersMongo from 'feathers-mongodb';


function setupService(db, url, collection, beforeHook = {}, afterHook = {}) {
    return function createPlugin() { 
        const app = this;  
        
        app.use(url, feathersMongo({ Model: db.collection(collection) }));

        const service = app.service(url);
        service.after(afterHook);
        service.before(beforeHook);
        service.filter(function(data, connection, hook) {});
    }
}

export default setupService;