const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const chars1 = s1.split('');
  const chars2 = s2.split('');

  let count = 0;
  for (const char1 of chars1) {
    let char1Index = chars2.indexOf(char1);
    if (char1Index !== -1) {
      chars2.splice(char1Index, 1);
      count++;
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
