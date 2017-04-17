import Model from '../models/Model';

async function documentIsUnique(db, data, collectionName) {
    let size;
    if (collectionName === "accounts") {
    size = await db.collection("accounts").find({username : data.username}).toArray();
    }       
    else {
    size = await db.collection(collectionName).find({name : data.name}).toArray();
    }
    if (size.length <= 0) {
        return true;
    }
    return false;
}

function validateHook(db, collectionName) {
    return async function execute(hookDetails) {
        if (hookDetails.type !== 'before') {
            throw new Error('Can only be used as a before hook.');
        }
        // console.log(hookDetails.data.validate().error , ' errors')
        if (await documentIsUnique(db, hookDetails.data, collectionName) && hookDetails.data instanceof Model) {
            if (!hookDetails.data.isValid()) {
                throw new Error('Data is invalid.');
            }            
            return hookDetails;
        }
        else {
        throw new Error('The object is either not valid or has a duplicate entry.');
        }
    }
} 

export default validateHook;
