
async function setAllAccounts(hookDetails, accounts) {
    // const results = await Promise.all(accounts.map(account => console.log(account)));
    const results = await Promise.all(accounts.map(async(account) => await setAccount(hookDetails, account)));
    return results;
}
// const reviews = await services['api/reviews'].find({query : {account : account.username}});
async function setAccount(hookDetails, account) {
    const services = hookDetails.app.services;
    const reservations = await services['api/reservations'].find({query : {account : account.username}});
    const purchases = await services['api/purchases'].find({query : {account : account.username}});
    const reviews = await services['api/reviews'].find({query : {account : account.username}});
    reservations.forEach(reservation => Reflect.deleteProperty(reservation, 'account'));
    purchases.forEach(purchase => Reflect.deleteProperty(purchase, 'account'));
    reviews.forEach(review => Reflect.deleteProperty(review, 'account'));
    const modifiedAccount = Object.assign(account, {
        reservations, purchases, reviews
    });
    // console.log(modifiedAccount, ' modifiedAccount');
    return modifiedAccount;
}

function loggerHook() {
    return async function execute(hookDetails) {
        const prop = hookDetails.type === 'before' ? 'data' : 'result';
        const account = (hookDetails.path === 'api/accounts') ? hookDetails[prop] : hookDetails[prop].account;
        let modifiedData;
        if (hookDetails[prop] instanceof Array) {
            modifiedData = await setAllAccounts(hookDetails, account);
        }
        else if(hookDetails[prop] instanceof Object) {
            modifiedData = await setAccount(hookDetails, account)
        }
        // console.log(modifiedData);
        const modifiedHook = Object.assign(hookDetails, {prop : modifiedData });
    }
}

export default loggerHook;