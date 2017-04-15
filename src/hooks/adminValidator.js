function adminValidatorHook() {
    return function execute(hookDetails) {
        // console.log(hookDetails.params, ' u are?');
        if (hookDetails.type !== 'before') {
            throw new Error('This hook can only be used as a before hook');
        }
        if (hookDetails.params.user.type === 'Admin') {
            return hookDetails;
        }
        throw new Error('Invalid Access. Permission not granted.');
    }
}

export default adminValidatorHook;