const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let prevChar = null;
  let result = '';

  for (const char of str) {
    if (!prevChar) {
      prevChar = char;
      continue;
    }

    if (prevChar !== char) {
      result += (count !== 1 ? `${count}${prevChar}` : prevChar);
      count = 1;
    } else {
      count ++;
    }

    prevChar = char;
  }

  if (str.length) {
    const char = str[str.length - 1];
    result += (count !== 1 ? `${count}${char}` : char);
  }

  return result;
}

module.exports = {
  encodeLine
};
