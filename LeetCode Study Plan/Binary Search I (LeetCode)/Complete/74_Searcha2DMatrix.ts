//https://leetcode.com/problems/search-a-2d-matrix/?envType=study-plan&id=binary-search-i

function searchMatrix(matrix: number[][], target: number): boolean {
  let start = 0
  let end = matrix.length - 1

  let startRow = 0
  let endRow = matrix[0].length - 1

  while (start <= end) {
    const middle = start + Math.floor((end - start) / 2)
    if (matrix[middle][0] > target) end = middle - 1
    else {
      while (startRow <= endRow) {
        const middleRow = startRow + Math.floor((endRow - startRow) / 2)
        const curr = matrix[middle][middleRow]
        if (curr === target) return true
        else if (curr < target) startRow = middleRow + 1
        else endRow = middleRow - 1
      }
      start = middle + 1
      startRow = 0
      endRow = matrix[0].length
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

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
)
console.log(searchMatrix([[1]], 1))
console.log(searchMatrix([[1], [3]], 3))
