//https://leetcode.com/problems/find-a-peak-element-ii/?envType=study-plan&id=binary-search-ii

function findPeakGrid(mat: number[][]): number[] {
  for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[row].length; col++) {
      if (checkAround(mat, mat[row][col], row, col)) {
        return [row, col]
      }
    }
  }

  function checkAround(
    mat: number[][],
    curr: number,
    row: number,
    col: number
  ): boolean {
    let left = -1
    let right = -1
    let top = -1
    let bottom = -1

    if (row > 0) left = mat[row - 1][col]
    if (row < mat.length - 1) right = mat[row + 1][col]
    if (col > 0) top = mat[row][col - 1]
    if (col < mat[row].length - 1) bottom = mat[row][col + 1]

    if (row > 0 && curr < left) return false
    if (row <= mat.length && curr < right) return false
    if (col > 0 && curr < top) return false
    if (col <= mat[row].length && curr < bottom) return false

    return true
  }

  return [-1, -1]
}

// console.log(
//   findPeakGrid([
//     [1, 4],
//     [3, 2],
//   ])
// )
// console.log(
//   findPeakGrid([
//     [10, 20, 15],
//     [21, 30, 14],
//     [7, 16, 32],
//   ])
// )
console.log(
  findPeakGrid([
    [1, 2, 3, 4, 5, 6, 7, 8],
    [2, 3, 4, 5, 6, 7, 8, 9],
    [3, 4, 5, 6, 7, 8, 9, 10],
    [4, 5, 6, 7, 8, 9, 10, 11],
  ])
)
