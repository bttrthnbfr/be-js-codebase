import redis from 'redis';

const cache = redis.createClient(6379, 'localhost');
cache.on('connect', () => {
  logger.info('success.create cache client');
});
cache.on('error', (err) => {
  logger.error(`errors.cache client: ${err.message}`);
});
