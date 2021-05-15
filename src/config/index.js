import configRedis from './config_redis';
import configSequelize from './config_sequelize';
import configRest from './config_rest';

const env = process.env.NODE_ENV;

export default {
  sequelize: env === 'production' ? configSequelize.production : configSequelize.development,
  debug: env !== 'production',
  jwtSecret: process.env.JWT_SECRET,
  redis: configRedis,
  rest: configRest,
};
