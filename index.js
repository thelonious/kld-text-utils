let funcs = require('./lib/Functions');

exports.SourcePrinter = require('./lib/SourcePrinter');
exports.Table = require('./lib/Table');

Object.keys(funcs).forEach(f => exports[f] = funcs[f]);
