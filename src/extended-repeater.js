const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
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
}

module.exports = {
  repeater
};
