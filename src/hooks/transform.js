function transformHook(ModelClass) {
    return function execute(hookDetails) {
        const prop = hookDetails.type === 'before' ? 'data' : 'result';
        // if (hookDetails.path === 'api/shoes') {
            // console.log(hookDetails[prop], ' so ur?')
        // }
        // console.log(hookDetails[prop], ' from transform hook before modified?');
        if (hookDetails[prop] instanceof Array) {
            hookDetails[prop] = hookDetails[prop].map(obj => new ModelClass(obj));
            // console.log(hookDetails[prop], ' from transform hook modified?');
        }
        else if (hookDetails[prop] instanceof Object) {
            hookDetails[prop] = new ModelClass(hookDetails[prop]);
            
        }
        else {
            return Promise.reject(new Error('Invalid data type given.'));
        }
    }
}

export default transformHook;