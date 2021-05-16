import express from 'express';

const server = express();
server.disable('x-powered-by');

export default server;
