'use strict';
let encryptPhone = "0877852635";
let phoneArray = encryptPhone.split('');
let phoneWithoutZero = phoneArray.slice(1);
alert('Array phone number: [' + phoneArray + ']');
alert('Phone without zero: ' + phoneWithoutZero.join(''));
