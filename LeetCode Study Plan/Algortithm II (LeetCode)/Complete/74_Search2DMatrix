//https://leetcode.com/problems/search-a-2d-matrix/
//Medium

function searchMatrix(matrix: number[][], target: number): boolean {
  for (let i = 0; i < matrix.length; i++) {
    if (target < matrix[i][0]) return false
    for (let j = 0; j < matrix[i].length; j++) {
      if (target === matrix[i][j]) {
        return true
      }
    }
  }
  return false
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
)
