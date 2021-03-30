const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error();
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element == '--discard-next') {
      result.push(null);
      i++;
    } else if (element == '--double-next') {
      if (i + 1 < arr.length) {
        result.push(arr[i + 1]);
      } 
    } else if (element == '--discard-prev') {
      if (result.length > 0) {
        result.pop();
      }
    } else if (element == '--double-prev') {
      if (result.length > 0) {
        result.push(result[result.length - 1]);
      }
    } else {
      result.push(element);
    }
  }

  result = result.filter(item => {
    return item != null;
  })

  return result;
};
