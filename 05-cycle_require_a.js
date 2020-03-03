module.exports.test = 'A';

const modB = require('./06-cycle_require_b');

console.log(modB.test);

module.exports.test = 'AA';
