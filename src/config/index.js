var env = process.env.NODE_ENV || 'development';
var confi = require(`./{env}`);

module.exports = config;