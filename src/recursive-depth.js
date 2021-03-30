const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    let max = 0;
    for (let arrItem of arr) {
      if (Array.isArray(arrItem)) {
        let tmpDepth = this.calculateDepth(arrItem);
        max = max < tmpDepth ? tmpDepth : max;
      }
    }

    return depth + max;
  }
};