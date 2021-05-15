// Notes: this file should not use import/export (es6)
// it's because this is used in /.sequilizerc to run db migration, seed etc..
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.SQL_USER,
    password: process.env.SQL_PASS,
    database: process.env.SQL_DB,
    host: process.env.SQL_HOST,
    port: process.env.SQL_PORT,
    dialect: process.env.SQL_DIALECT,
    // eslint-disable-next-line no-console
    logging: console.log, // TODO replace with proper loging
    pool: {
      max: Number(process.env.SQL_POOL_MAX_LIMIT),
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    define: {
      freezeTableName: true,
      timestamps: false,
    },
  },
  production: {
    username: process.env.SQL_USER,
    password: process.env.SQL_PASS,
    database: process.env.SQL_DB,
    port: process.env.SQL_PORT,
    dialect: process.env.SQL_DIALECT,
    logging: false,
    pool: {
      max: Number(process.env.SQL_POOL_MAX_LIMIT),
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    define: {
      freezeTableName: true,
      timestamps: false,
    },
  },
};
