const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = '';
  let repeatTimes = 1;
  let separator = '+';
  let addition = '';
  let additionRepeatTimes = 0;
  let additionSeparator = '|';

  if ('repeatTimes' in options) {
    repeatTimes = options['repeatTimes'];
  }

  if ('separator' in options) {
    separator = options['separator'];
  }

  if ('addition' in options) {
    addition = options['addition'];
  }

  if ('additionRepeatTimes' in options) {
    additionRepeatTimes = options['additionRepeatTimes'];
  }

  if ('additionSeparator' in options) {
    additionSeparator = options['additionSeparator'];
  }

  if (additionRepeatTimes > 0) {
    let tmpStr = (addition + additionSeparator).repeat(additionRepeatTimes);
    result += tmpStr.substr(0, tmpStr.length - additionSeparator.length);
  } else {
    if (addition != '') {
      result += addition;
    }
  }

  if (repeatTimes > 0) {
    let tmpStr = (str + result + separator).repeat(repeatTimes);
    result = tmpStr.substr(0, tmpStr.length - separator.length);
  }

  return result;
};
  