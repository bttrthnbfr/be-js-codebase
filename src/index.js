import fastify from 'fastify';
import RestUser from './handler/rest/rest_user';

const server = fastify();
// eslint-disable-next-line no-new
new RestUser(server);

server.listen(3000, '0.0.0.0', (err, address) => {
  if (err) {
    // eslints-disable-next-line no-console
    console.error(err);
    process.exit(1);
  }
  // eslint-disable-next-line no-console
  console.log(`Server listening at ${address}`);
});
