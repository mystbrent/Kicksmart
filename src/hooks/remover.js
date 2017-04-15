function removerHook() {
    return function execute(hookDetails) {
        const prop = hookDetails.type === 'before' ? 'data' : 'result';
        const results = hookDetails.result;
        
        if(hookDetails[prop] instanceof Array) {
            if (hookDetails.params.provider) {
            hookDetails[prop].map(result => Reflect.deleteProperty(result, 'password'));
            }
        }
        else if (hookDetails[prop] instanceof Object) {
            if (hookDetails.params.provider) {
            Reflect.deleteProperty(results, 'password');
            }
        }
        // console.log(hookDetails[prop], ' from remover hook');        
        return hookDetails;
    }
}

export default removerHook;