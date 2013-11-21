_argv = require('optimist').argv;
__root_path = __dirname;
__NODE_ENV = process.env.NODE_ENV || _argv.env || 'development';

var app = require('../nemesis/index.js')();
console.log(app)