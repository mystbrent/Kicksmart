
async function setAllShoes(hookDetails, shoes) {
    const results = await Promise.all(shoes.map(async(shoe) => await findData(hookDetails, shoe)));
    return results;
}

async function findData(hookDetails, shoes) {
    const services = hookDetails.app.services;
    // console.log(services, ' da services');
    const reservations = await services['api/reservations'].find({query : {"shoes.name" : shoes.name}});
    const purchases = await services['api/purchases'].find({query : {"shoes.name" : shoes.name}});
    const reviews = await services['api/reviews'].find({query : {shoes : shoes.name}});
    const promos = await services['api/promos'].find({query : {shoes : {$in : [shoes.name]}}});
    // console.log(shoes.name, ' da name')
    // console.log(promos, ' da promos');
    const modifiedshoes = Object.assign(shoes, {
        reservations, purchases, reviews, promos
    });
    // console.log(modifiedshoes.reservations,' nabuang na?')
    return modifiedshoes;   
}

function shoeSetterHook() {
    return async function execute(hookDetails) {
        const prop = hookDetails.type === 'before' ? 'data' : 'result';
        // console.log(hookDetails.app.services['api/shoes'], ' what is inside shoeSetterHook');
        if (hookDetails[prop] instanceof Array) {
            hookDetails[prop].forEach(shoe => {
                shoe.reviews = [],
                shoe.reservations = [],
                shoe.purchases = []
                shoe.promos = []
            });
            await setAllShoes(hookDetails, hookDetails[prop]);
        }
        else if(hookDetails[prop] instanceof Object) {
            hookDetails[prop].reviews = [];
            hookDetails[prop].reservations = [];
            hookDetails[prop].purchases = [];
            hookDetails[prop].promos = [];
           await findData(hookDetails, hookDetails[prop]);
        }

    }
}

export default shoeSetterHook;