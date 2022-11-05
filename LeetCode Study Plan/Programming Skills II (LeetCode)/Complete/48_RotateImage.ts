//https://leetcode.com/problems/rotate-image/
//Medium

/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const len = matrix.length

  transpose(matrix)
  reflect(matrix)

  /**
   * Here we will rotate numbers Diagonally
   * For Example in => [[1, 2], [3, 4]] => [[1, 3], [2, 4]]
   */
  function transpose(matrix: number[][]) {
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        let temp = matrix[i][j]
        matrix[i][j] = matrix[j][i]
        matrix[j][i] = temp
      }
    }
  }

  /**
   * Here we will reverse numbers in each row
   * For Example in => [[1, 2], [3, 4]] => [[2, 1], [4 , 3]]
   */
  function reflect(matrix: number[][]) {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < Math.floor(len / 2); j++) {
        let temp = matrix[i][j]
        matrix[i][j] = matrix[i][len - 1 - j]
        matrix[i][len - 1 - j] = temp
      }
    }
  }
}

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)
