//https://leetcode.com/problems/max-area-of-island/
//Medium

function maxAreaOfIsland(grid: number[][]): number {
  let max = 0
  let row = grid.length
  let cols = grid[0].length

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        max = Math.max(max, helper(i, j, grid))
      }
    }
  }

  return max
}

function helper(i: number, j: number, grid: number[][]) {
  let count = 0

  if (
    i >= 0 &&
    j >= 0 &&
    i < grid.length &&
    j < grid[0].length &&
    grid[i][j] !== 0
  ) {
    grid[i][j] = 0
    count++
    count += helper(i + 1, j, grid)
    count += helper(i - 1, j, grid)
    count += helper(i, j + 1, grid)
    count += helper(i, j - 1, grid)

    return count
  }

  return 0
}

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
)
