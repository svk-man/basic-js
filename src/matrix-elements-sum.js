const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;

  matrix.forEach((matrixRow, matrixRowIndex) => {
    matrixRow.forEach((matrixItem, matrixItemIndex) => {
      if (matrixRowIndex > 0 && matrix[matrixRowIndex - 1][matrixItemIndex] !== 0 || matrixRowIndex === 0) {
        sum += matrixItem;
      }
    });
  });

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
