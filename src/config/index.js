import sequelize from './config_sequelize';

const env = process.env.NODE_ENV;

export default {
  sequelize: env === 'production' ? sequelize.production : sequelize.development,
  debug: env !== 'production',
  jwtSecret: 'SUPER_STRONG_SECRET',
};
