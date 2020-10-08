
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix === undefined ? [] : 
            matrix.map((aRow,rowCount) => (rowCount + 1) % 2 === 0 ? 
                  aRow.sort((a, b) => b - a) : aRow.sort((a, b) => a - b)).flat();
}
