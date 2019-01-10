const arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
function diagonalDifference(matrix) {
  const size = matrix.length;
  const primary = matrix.reduce((a, b, idx) => a + parseInt(b[idx]), 0);

  const secondary = matrix.reduce((a, b, idx) => a + parseInt(b[size - idx - 1]), 0);
  console.log(secondary);
  return Math.abs(primary - secondary);
}
console.log(diagonalDifference(arr));
