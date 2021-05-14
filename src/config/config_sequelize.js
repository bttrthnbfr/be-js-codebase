import 'dotenv/config';

export default {
  development: {
    username: process.env.SQL_USER,
    password: process.env.SQL_PASS,
    database: process.env.SQL_DB,
    host: process.env.SQL_HOST,
    port: process.env.SQL_PORT,
    dialect: process.env.SQL_DIALECT,
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
