// eslint-disable-next-line no-unused-vars
function getMatrixElementsSum(matrix) {
  let result = 0;
  const transpose = () => matrix[0].map((x, i) => matrix.map((el) => el[i]));
  for (let i = 0; i < transpose(matrix).length; i++) {
    for (let j = 0; j < transpose(matrix)[i].length; j++) {
      if (transpose(matrix)[i][j] === 0) break;
      result += transpose(matrix)[i][j];
    }
  }
  return result;
}

module.exports = getMatrixElementsSum;
