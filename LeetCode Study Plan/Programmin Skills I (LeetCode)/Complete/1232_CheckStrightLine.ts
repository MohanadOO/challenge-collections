//https://leetcode.com/problems/check-if-it-is-a-straight-line/
//Easy

function checkStraightLine(coordinates: number[][]): boolean {
  const n = coordinates.length

  for (let i = 0; i < n - 2; i++) {
    const [x1, y1] = coordinates[i]
    const [x2, y2] = coordinates[i + 1]
    const [x3, y3] = coordinates[i + 2]

    const area = Math.abs(
      (1 / 2) * (x1 * y2 + x2 * y3 + x3 * y1 - (y1 * x2 + y2 * x3 + y3 * x1))
    )
    if (area > 0) return false
  }

  return true
}

console.log(
  checkStraightLine([
    [1, 1],
    [2, 2],
    [3, 4],
    [4, 5],
    [5, 6],
    [7, 7],
  ])
)
console.log(
  checkStraightLine([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
  ])
)
console.log(
  checkStraightLine([
    [0, 0],
    [0, 1],
    [0, -1],
  ])
)
