import createServer from './app';

const startServer = async () => {
    const app = await createServer();
    const port = process.env.PORT || 8000;
    app.listen(port, '0.0.0.0', () => {
        console.log('App at http://localhost:8000');
    });
}

startServer();