import createServer from '../app';

const seed = async () => {
    const app = await createServer();

    const reviews = [
        {
            shoes : 'Roshe Run XI',
            name : "Randle",
            account : 'mark-1',
        },
        {
            shoes : 'Roshe Run XI',
            name : "Randle",
            account : 'mark-2',
        },
        {
            shoes : 'Roshe Run XI',
            name : "Randle",
            account : 'mark-3',
        },
        {
            shoes : 'Roshe Run X',
            name : "Randle",
            account : 'mark-4',
        },
        {
            shoes : 'Roshe Run XI',
            name : "Randle",
            account : 'mark-5',
        },
        {
            shoes : 'Roshe Run XI',
            name : "Randle",
            account : 'mark-6',
        },
        {
            shoes : 'Roshe Run XI',
            name : "Randle",
            account : 'mark-7',
        },
    ]

    const service = app.service('/api/reservations');
    await service.remove(null);
    return Promise.all(reviews.map(review => service.create(review)));
};

export default seed;