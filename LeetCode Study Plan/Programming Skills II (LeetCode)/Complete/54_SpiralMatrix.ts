//https://leetcode.com/problems/spiral-matrix/
//Medium

function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = []
  let left = 0,
    right = matrix[0].length,
    top = 0,
    bottom = matrix.length

  while (left < right && top < bottom) {
    for (let i = left; i < right; i++) {
      result.push(matrix[top][i])
    }
    top++

    for (let i = top; i < bottom; i++) {
      result.push(matrix[i][right - 1])
    }
    right--

    if (left >= right || top >= bottom) break

    for (let i = right - 1; i >= left; i--) {
      result.push(matrix[bottom - 1][i])
    }
    bottom--

    for (let i = bottom - 1; i >= top; i--) {
      result.push(matrix[i][left])
    }
    left++
  }
  return result
}

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
)
