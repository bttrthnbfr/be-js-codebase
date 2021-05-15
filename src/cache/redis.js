import redis from 'redis';
import config from '../config';

const { promisify } = require('util');

const client = redis.createClient(config.redis.port, config.redis.host);

// Node Redis currently doesn't natively support promises
// (this is coming in v4), however you can wrap the methods you want to use with promises ..
// using the built-in Node.js util.promisify method on Node.js >= v8;
client.get = promisify(client.get).bind(client);
client.set = promisify(client.set).bind(client);

export default client;
