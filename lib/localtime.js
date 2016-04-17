
'use strict';

module.exports = function (format) {
  const now = new Date();
  const _format = format || 'YYYY-MM-DDThh:mm:ss';

  const YYYY = now.getFullYear();
  const MM = zeroFill(now.getMonth() + 1, 2);
  const DD = zeroFill(now.getDate(), 2);

  const hh = zeroFill(now.getHours(), 2);
  const mm = zeroFill(now.getMinutes(), 2);
  const ss = zeroFill(now.getSeconds(), 2);

  
  return _format
    .replace('YYYY', YYYY)
    .replace('MM', MM)
    .replace('DD', DD)
    .replace('hh', hh)
    .replace('mm', mm)
    .replace('ss',ss);
};


function zeroFill(number, length) {
  number = number.toString();

  while (number.length < length) {
    number = '0' + number;
  }

  return number;
}
