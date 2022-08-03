//https://leetcode.com/problems/matrix-diagonal-sum/
//Easy

function diagonalSum(mat: number[][]): number {
  let sum = 0
  let primary = 0
  let secondary = mat.length - 1

  while (primary < mat.length) {
    if (primary === secondary) {
      sum += mat[primary][primary]
    } else {
      sum += mat[primary][primary] + mat[primary][secondary]
    }
    primary++
    secondary--
  }
  return sum
}

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)
console.log(
  diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
)

console.log(diagonalSum([[5]]))
