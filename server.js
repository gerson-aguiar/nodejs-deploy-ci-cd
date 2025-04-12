
// server.js
require('newrelic');
const fastify = require('fastify')();

fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
});

fastify.post('/data', async (request, reply) => {
    const payload = request.body;
    console.log("INFO, fluxo de criar usuario")
    return { receivedData: payload };
});

module.exports = fastify;