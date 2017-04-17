import {ObjectId} from 'mongodb'; 

const defaults = {
  idField: 'username',
  ownerField : 'account',
};

function restrictorHook(options = {}) {
    return async function execute(hook) {
        if(!hook.params.provider) {
         return hook;
        }
        else if (!hook.params.user) {
            throw new Error('You must be authenticated.');
        }
        options = Object.assign({}, defaults, hook.app.get('auth'), options);
        const id = hook.params.user[options.idField];
        const service = hook.app.services[hook.path];
        let modifiedData;
        if (id === undefined) {
            throw new Error('Invalid data provided data.');
        }
        else if (!hook.params.user) {
            console.log('no user')          
        }
        if (hook.id ) {
          const object = await service.get(hook.id);
          let data;
          if (hook.path === 'api/accounts') {
            data = object._id.toString();
          }
          else {
            // data = object[options.ownerField].username;
            data = object[options.ownerField];
            console.log(data,' ownerField')
          }
          if (hook.params.user[options.idField].toString() !== data
           && hook.params.user.type !== 'Admin') {
            throw new Error('You do not have permissions to do this')
          }
          return hook;
        }
        else {
          if (hook.params.user.type === 'Admin') {
            return modifiedData;
          }
          else {
          const docs = await service.find();
          const owned = docs.filter(doc => doc[options.ownerField] === hook.params.user.username);
          // console.log(owned, ' pagmamayari')
          modifiedData = Object.assign(hook, {result : owned});
          }
        }
        return modifiedData;
    }
}

export default restrictorHook;