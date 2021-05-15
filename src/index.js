/* eslint-disable no-new */
import express from 'express';
import RestUser from './handler/rest/rest_user';
import db from './db/sequelize';
import logger from './shared/logger';
import RestAuth from './handler/rest/rest_auth';

const server = express();
server.disable('x-powered-by');

new RestUser(server);
new RestAuth(server);

db.sequelize.authenticate().then(() => {
  logger.info('DB sync successfull');
}).catch((err) => {
  logger.error(err);
  process.exit(1);
});

server.listen(3000, '0.0.0.0', (err, address) => {
  if (err) {
    // eslints-disable-next-line no-console
    logger.err(err);
    process.exit(1);
  }
  // eslint-disable-next-line no-console
  logger.info(`Server listening at ${address}`);
});
