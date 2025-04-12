// Import the Fastify module
const fastify = require('fastify')();

// Define a route handler for the root URL
fastify.get('/', async (request, reply) => {
    console.log('Received a GET request');
    return { hello: 'world' };
});

// Define a route handler for handling POST requests to '/data'
fastify.post('/data', async (request, reply) => {
    const payload = request.body;
    // Process the incoming data
    // For now, let's just echo back the received data
    console.log('Received a POST request with payload:', payload);
    return { receivedData: payload };
});

// Start the server
const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
        console.log('Server is running on http://localhost:3000');
    } catch (error) {
        console.error('Error starting server:', error);
        process.exit(1);
    }
};

start();
