'use strict';

const localtime = require('./lib/localtime');

console.log(localtime());
console.log(localtime(undefined, 'YYYY-MM-DDThh-mm-ss'));
console.log(localtime('', 'YYYY-MM-DDThh-mm-ss'));
console.log(localtime('2016-11-08T01:57:16.642Z', 'YYYY/MM/DD hh:mm:ss'));
console.log(localtime('2016-11-08T01:57:16.642Z', 'YYYY/MM/DD hh:mm'));
