// Import the Fastify module
require('newrelic')
// const fastify = require('fastify')();

// fastify.register(require('@fastify/mongodb'), {
//     forceClose: true,
//     // url:
// })
//
// // Exemplo de rota usando o banco
// fastify.get('/users', async (request, reply) => {
//     const collection = fastify.mongo.db.collection('users');
//     const users = await collecdsdstion.find({}).toArray();
// dsdsdsddsd});
//
// fastify.post('/users', async (request, reply) => {
//     const user = request.body;
//     const collection = fastify.mongo.db.collection('users');
//     const result = await collection.insertOne(user);
//     return { insertedId: result.insertedId };
// });
//
// // Define a route handler for the root URL
// fastify.get('/', async (request, reply) => {
//     console.log('Received a GET request');
//     return { hello: 'world' };
// });
//
// // Define a route handler for handling POST requests to '/data'
// fastify.post('/data', async (request, reply) => {
//     const payload = request.body;
//     // Process the incoming data
//     // For now, let's just echo back the received data
//     console.log('Received a POST request with payload:', payload);
//     return { receivedData: payload };
// });
//
// // Start the server
// const start = async () => {
//     try {
//         await fastify.listen({ port: process.env.PORT || 3000, host: '0.0.0.0' });
//         console.log('Server is running on http://localhost:3000');
//     } catch (error) {
//         console.error('Error starting server:', error);
//         process.exit(1);
//     }
// };
//
// start();


// index.js
const fastify = require('./server');

const start = async () => {
    try {
        await fastify.listen({ port: process.env.PORT || 3000, host: '0.0.0.0' });
        console.log('Server is running on http://localhost:3000');
    } catch (error) {
        console.error('Error starting server:', error);
        process.exit(1);
    }
};

start();