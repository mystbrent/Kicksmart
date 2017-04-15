import createServer from '../createServer';

const seed = async () => {
    const app = await createServer();

    const accounts = [
        {}
    ]

    return Promise.all(accounts.map(account => app.create(account)));
};

export default seed;