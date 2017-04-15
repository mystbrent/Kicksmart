import createServer from '../app';

const seed = async () => {
    const app = await createServer();

    const promos = [
        {
            name : 'Near Summer Sale!',
            shoes : ['Roshe Run XI', 'Roshe Run X', 'Zoom XI', ],
            discount : 0.1,
            startDate: new Date('2017-3-25'),
            endDate : new Date('2017-4-19'),
        },
        {
            name : 'Graduation Sale!',
            shoes : [ 'Zoom XI', 'Threadded Low Cut', 'Slimmed Low Cut'],
            startDate: new Date('2017-3-25'),
            discount : 0.2,
            endDate : new Date('2017-4-21'),
        },
        {
            name : 'Goblin Sale!',
            shoes : ['Roshe Run XI', 'Roshe Run X', 'Slimmed Low Cut'],
            startDate: new Date('2017-3-25'),
            discount : 0.05,
            endDate : new Date('2017-4-15'),
        },
    ]

    const promoService = app.service('/api/promos');
    await promoService.remove(null);
    return Promise.all(promos.map(shoe => promoService.create(shoe)));
};

export default seed;