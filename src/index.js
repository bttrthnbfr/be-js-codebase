/* eslint-disable no-new */
import server from './handler/rest';
import db from './db/sequelize';
import RestUser from './handler/rest/rest_user';
import logger from './shared/logger';
import RestAuth from './handler/rest/rest_auth';
import cache from './cache/redis';
import config from './config';

new RestUser();
new RestAuth();

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
server.listen(config.rest.port, config.rest.host, (err) => {
  if (err) {
    // eslints-disable-next-line no-console
    logger.err(err);
    process.exit(1);
  }
  // eslint-disable-next-line no-console
  logger.info(`success.listening server at port ${config.rest.port}`);
});
