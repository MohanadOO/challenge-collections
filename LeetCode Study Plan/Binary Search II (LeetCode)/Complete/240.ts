//https://leetcode.com/problems/search-a-2d-matrix-ii/?envType=study-plan&id=binary-search-ii

function searchMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length < 1) return false

  for (let i = 0; i < matrix.length; i++) {
    let start = 0
    let end = matrix[i].length

    let midRow = 0
    let midCol = 0

    while (start <= end) {
      midRow = start + Math.floor((end - start) / 2)
      const curr = matrix[i][midRow]
      if (curr === target) return true
      else if (curr < target) start = midRow + 1
      else end = midRow - 1
    }
    let startCol = i
    let endCol = matrix[i].length
    while (startCol <= endCol) {
      midCol = startCol + Math.floor((endCol - startCol) / 2)
      if (matrix[midCol] === undefined) break
      const curr = matrix[midCol][midRow]

      if (curr === target) return true
      else if (curr < target) startCol = midCol + 1
      else endCol = midCol - 1
    }
  }

  return false
}

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
)
console.log(searchMatrix([[1, 1]], 0))
