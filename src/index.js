/* eslint-disable no-new */
import express from 'express';
import db from './db/sequelize';
import RestUser from './handler/rest/rest_user';
import logger from './shared/logger';
import RestAuth from './handler/rest/rest_auth';
import cache from './cache/redis';

const server = express();
server.disable('x-powered-by');

new RestUser(server);
new RestAuth(server);

// db authenticate
db.sequelize.authenticate().then(() => {
  logger.info('success.db authenticate');
}).catch((err) => {
  logger.error(`errors.db authenticate: ${err.message}`);
  process.exit(1);
});

// cache create client
cache.on('connect', () => {
  logger.info('success.create cache client');
});
cache.on('error', (err) => {
  logger.error(`errors.cache client: ${err.message}`);
});

// serve http server
server.listen(3000, '0.0.0.0', (err, address) => {
  if (err) {
    // eslints-disable-next-line no-console
    logger.err(err);
    process.exit(1);
  }
  // eslint-disable-next-line no-console
  logger.info(`success.server listening at ${address}`);
});
