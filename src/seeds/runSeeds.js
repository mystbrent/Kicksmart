import path from 'path';
import fs from 'fs';

const runSeeds = () => {
    const collectionName = process.argv[2];
    const fullPath = path.join(process.cwd(), `src/seeds/${collectionName}.js`);
    const fileExists = fs.existsSync(fullPath);

    if(fileExists) {
       const seedFunc = require(`./${collectionName}`).default;
       seedFunc()
        .then(() => {
            console.log(`Seeds for ${collectionName} successful`);
            process.exit(0);
        })
        .catch(err => {
            console.log('ERROR OCCURED', err);
        })
    }
    else {
        console.log(`Seed file for ${collectionName} does not exist.`);
    }

};

runSeeds();