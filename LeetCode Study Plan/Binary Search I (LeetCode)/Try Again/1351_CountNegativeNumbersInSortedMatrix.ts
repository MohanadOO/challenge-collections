//https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/?envType=study-plan&id=binary-search-i

function countNegatives(grid: number[][]): number {
  return countNegativesNestedLoop(grid)
  // return countNegativesBinarySearch(grid)
}

function countNegativesNestedLoop(grid: number[][]): number {
  let total = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = grid[i].length - 1; j >= 0; j--) {
      if (grid[i][j] < 0) total++
      else break
    }
  }

  return total
}

//Binary Search (Not Complete)
function countNegativesBinarySearch(grid: number[][]): number {
  let total = 0

  for (let i = 0; i < grid.length; i++) {
    let start = 0
    let end = grid[i].length - 1

    let flag = false
    while (flag === false) {
      const middle = start + Math.floor((end - start) / 2)
      const curr = grid[i][middle]

      if (start > end) flag = true
      else if (curr < 0) {
        if (grid[i][start] >= 0) end = middle - 1
        else {
          total += grid[i].length - start
          flag = true
        }
      } else start = middle + 1
    }
  }

  return total
}

// console.log(
//   countNegatives([
//     [4, 3, 2, -1],
//     [3, 2, 1, -1],
//     [1, 1, -1, -2],
//     [-1, -1, -2, -3],
//   ])
// )
// console.log(
//   countNegatives([
//     [3, 2],
//     [1, 0],
//   ])
// )
// console.log(
//   countNegatives([
//     [3, -1, -3, -3, -3],
//     [2, -2, -3, -3, -3],
//     [1, -2, -3, -3, -3],
//     [0, -3, -3, -3, -3],
//   ])
// )
console.log(
  countNegatives([
    [8, -2, -2, -2, -4, -5, -5],
    [-2, -3, -3, -4, -4, -5, -5],
    [-2, -5, -5, -5, -5, -5, -5],
    [-3, -5, -5, -5, -5, -5, -5],
    [-5, -5, -5, -5, -5, -5, -5],
    [-5, -5, -5, -5, -5, -5, -5],
    [-5, -5, -5, -5, -5, -5, -5],
    [-5, -5, -5, -5, -5, -5, -5],
    [-5, -5, -5, -5, -5, -5, -5],
  ])
)
