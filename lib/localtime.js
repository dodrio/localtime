'use strict';

module.exports = function (time, format) {
  const _time = time
    ? new Date(time)
    : new Date();

  const _format = format || 'YYYY-MM-DDThh:mm:ss';

  const YYYY = _time.getFullYear();
  const MM = zeroFill(_time.getMonth() + 1, 2);
  const DD = zeroFill(_time.getDate(), 2);

  const hh = zeroFill(_time.getHours(), 2);
  const mm = zeroFill(_time.getMinutes(), 2);
  const ss = zeroFill(_time.getSeconds(), 2);


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
