module.exports.test = 'B';

const modA = require('./05-cycle_require_a');

console.log(modA.test);

module.exports.test = 'BB';
