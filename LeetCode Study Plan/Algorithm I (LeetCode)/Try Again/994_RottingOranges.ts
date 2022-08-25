//https://leetcode.com/problems/rotting-oranges/
//Medium

function orangesRotting(grid: number[][]): number {
  if (grid.length < 1) return 0

  const row = grid.length
  const col = grid[0].length
  let fresh = 0
  let min = 0
  const queue: number[][] = []

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 2) queue.push([i, j])
      if (grid[i][j] === 1) fresh++
    }
  }

  while (queue.length) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift()

      if (x - 1 >= 0 && grid[x - 1][y] === 1) {
        grid[x - 1][y] = 2
        fresh--
        queue.push([x - 1, y])
      }

      if (x + 1 < row && grid[x + 1][y] === 1) {
        grid[x + 1][y] = 2
        fresh--
        queue.push([x + 1, y])
      }

      if (y - 1 >= 0 && grid[x][y - 1] === 1) {
        grid[x][y - 1] = 2
        fresh--
        queue.push([x, y - 1])
      }

      if (y + 1 < col && grid[x][y + 1] === 1) {
        grid[x][y + 1] = 2
        fresh--
        queue.push([x, y + 1])
      }
    }
    if (queue.length > 0) min++
  }

   return fresh === 0 ? min : -1
}

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
)
