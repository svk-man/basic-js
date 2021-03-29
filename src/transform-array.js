const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error();
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element == '--discard-next') {
      i++;
    } else if (element == '--discard-prev') {
      if (i > 0 && result[result.length - 1] == arr[i-1]) {
        result.splice(result.length - 1, 1);
      }
    } else if (element == '--double-next') {
      if (i + 1 < arr.length) {
        if (arr[i + 2] == '--discard-prev') {
          result.push(arr[i + 1]);
          i+=2;
        } else if (arr[i + 2] == '--double-prev') {
          result.push(arr[i + 1], arr[i + 1], arr[i + 1]);
          i+=2;
        } else {
          //result.push(arr[i + 1]);
        }
      }
    } else if (element == '--double-prev') {
      //result.splice(result.length, 2);
    } else {
      result.push(element);
    }
  }

  return result;
};
