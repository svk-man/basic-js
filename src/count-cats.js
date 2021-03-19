const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let countCats = 0;
  for (let subMatrix of matrix) {
    for (let subMatrixItem of subMatrix) {
      if (subMatrixItem == "^^") {
        countCats += 1;
      }
    }
  }
  
  return countCats;
};
