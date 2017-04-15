import app from './app';
import Shoes from '../models/Shoes';

async function getShoes(id) {
    console.log(id, ' dadadada id')
        // const service = app.service('/api/shop');
        const service = app.service('/api/shoes');
        let shoes = await service.get(id);
        if (shoes) {
            shoes = new Shoes(shoes);
            return shoes;
        }
        return undefined;
    }

export default getShoes;