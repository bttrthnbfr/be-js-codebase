import configRedis from './config_redis';
import configSequelize from './config_sequelize';

const env = process.env.NODE_ENV;

export default {
  sequelize: env === 'production' ? configSequelize.production : configSequelize.development,
  debug: env !== 'production',
  jwtSecret: 'SUPER_STRONG_SECRET',
  redis: configRedis,
};
