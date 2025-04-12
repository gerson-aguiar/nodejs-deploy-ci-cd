
// server.js
require('newrelic');
const fastify = require('fastify')();

fastify.get('/', async (request, reply) => {
    return { hello: 'world joao' };
});

fastify.post('/data', async (request, reply) => {
    const payload = request.body;
    return { receivedData: payload };
});

module.exports = fastify;