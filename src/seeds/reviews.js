import createServer from '../app';

const seed = async () => {
    const app = await createServer();

    const reviews = [
        {
            account : 'Brent',
            shoes : 'Roshe Run XI',
            rating : 7,
            comments : [],
            desc : 'mayo gid',
        },
        {
            account : 'Brent',
            shoes : 'Roshe Run XI',
            rating : 4,
            comments : [],
            desc : 'law.ay man',
        },
        {
            account : 'Brent',
            shoes : 'Roshe Run XI',
            rating : 9,
            comments : [],
            desc : 'Nami nami gid',
        },
        {
            account : 'Brent',
            shoes : 'Roshe Run X',
            rating : 7,
            comments : [],
            desc : 'Nami man',
        },
        {
            account : 'Brent',
            shoes : 'Roshe Run X',
            rating : 6,
            comments : [],
            desc : 'Nami kag',
        },
        {
            account : 'Brent',
            shoes : 'Roshe Run XI',
            rating : 10,
            comments : [],
            desc : 'Perfect',
        },
        {
            account : 'Brent',
            shoes : 'Roshe Run XI',
            rating : 3,
            comments : [],
            desc : 'Mahal mahal kag law.ay man',
        },
    ]

    const service = app.service('/api/reviews');
    await service.remove(null);
    return Promise.all(reviews.map(review => service.create(review)));
};

export default seed;