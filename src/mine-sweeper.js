const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const getMinesCount = (row, col) => {
    let count = 0;

    if (row - 1 >= 0 && col - 1 >= 0 && matrix[row - 1][col - 1]) {
      count++;
    }

    if (row - 1 >= 0 && matrix[row - 1][col]) {
      count++;
    }

    if (row - 1 >= 0 && col + 1 < matrix.length && matrix[row - 1][col + 1]) {
      count++;
    }

    if (col + 1 < matrix.length && matrix[row][col + 1]) {
      count++;
    }

    if (row + 1 < matrix.length && col + 1 < matrix.length && matrix[row + 1][col + 1]) {
      count++;
    }

    if (row + 1 < matrix.length && matrix[row + 1][col]) {
      count++;
    }

    if (row + 1 < matrix.length && col - 1 >= 0 && matrix[row + 1][col - 1]) {
      count++;
    }

    if (col - 1 >= 0 && matrix[row][col - 1]) {
      count++;
    }

    return count;
  };

  return matrix.map((matrixRow, matrixRowIndex) => {
    return matrixRow.map((matrixItem, matrixItemIndex) => {
      return getMinesCount(matrixRowIndex, matrixItemIndex);
    });
  });
}

module.exports = {
  minesweeper
};
