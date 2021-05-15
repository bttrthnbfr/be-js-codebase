const { promisify } = require('util');
const pipeline = promisify(require('stream').pipeline);

export default pipeline;
