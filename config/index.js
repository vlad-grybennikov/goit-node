const {NODE_ENV = "development"} = process.env;
module.exports = require(`./${NODE_ENV}`);
