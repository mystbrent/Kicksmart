function cleanerHook() {
    return function execute(hookDetails) {
        const prop = hookDetails.type === 'before' ? 'data' : 'result';
        const account = hookDetails[prop].account.username;
        const modifiedDetails = Object.assign(hookDetails[prop], {account});
        const modifiedHook = Object.assign(hookDetails, {prop : modifiedDetails});
    }
}

export default cleanerHook;