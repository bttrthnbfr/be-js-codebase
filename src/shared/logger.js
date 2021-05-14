import log4js from 'log4js';

// TODO append log to influxdb
log4js.configure({
  appenders: {
    apps: {
      type: 'console',
    },
  },
  categories: { default: { appenders: ['apps'], level: 'DEBUG' } },
  outputCapture: 'std',
});

const logger = log4js.getLogger('apps');

export default logger;
