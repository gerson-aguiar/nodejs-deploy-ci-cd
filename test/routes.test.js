import request from 'supertest';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import fastifyApp from '../server';

beforeAll(async () => {
    await fastifyApp.ready(); // necessário antes de usar
});

afterAll(async () => {
    await fastifyApp.close();
});

describe('Rotas da aplicação', () => {
    it('GET / deve retornar { hello: "world" }', async () => {
        const response = await request(fastifyApp.server).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ hello: 'world' });
    });

    it('POST /data deve retornar os dados enviados', async () => {
        const payload = { nome: 'Gerson' };
        const response = await request(fastifyApp.server).post('/data').send(payload);
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ receivedData: payload });
    });
});