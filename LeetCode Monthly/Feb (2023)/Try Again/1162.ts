//https://leetcode.com/problems/as-far-from-land-as-possible

// Solution => https://leetcode.com/problems/as-far-from-land-as-possible/solutions/3166472/fast-javascript-very-very-easy-to-understand-solution-with-video-explanation-en-kr/
function maxDistance(grid: number[][]): number {
  let queue: number[][] = []
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        queue.push([i, j, 0])
      }
    }
  }

  let distance = 0
  let dir = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ]

  while (queue.length > 0) {
    let [row, col, count] = queue[0]
    queue.shift()

    distance = Math.max(distance, count)

    for (let d of dir) {
      let [dx, dy] = d
      let x = row + dx
      let y = col + dy

      if (x < 0 || x >= grid.length) continue
      if (y < 0 || y >= grid[0].length) continue
      if (grid[x][y] === 1) continue

      queue.push([x, y, count + 1])
      grid[x][y] = 1
    }
  }

  return distance === 0 ? -1 : distance
}

console.log(
  maxDistance([
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ])
)

console.log(
  maxDistance([
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ])
)
