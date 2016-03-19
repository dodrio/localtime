
'use strict';

module.exports = function () {
  const now = new Date();

  const YYYY = now.getFullYear();
  const MM = zeroFill(now.getMonth() + 1, 2);
  const DD = zeroFill(now.getDate(), 2);

  const hh = zeroFill(now.getHours(), 2);
  const mm = zeroFill(now.getMinutes(), 2);
  const ss = zeroFill(now.getSeconds(), 2);

  return `${YYYY}-${MM}-${DD}T${hh}-${mm}-${ss}`;
};


function zeroFill(number, length) {
  number = number.toString();

  while (number.length < length) {
    number = '0' + number;
  }

  return number;
}
