//https://leetcode.com/problems/check-if-it-is-a-straight-line/
//Easy

function checkStraightLine(coordinates: number[][]): boolean {
  if (coordinates.length <= 2) return true

  let differenceX: number = coordinates[1][0] - coordinates[0][0]
  let differenceY: number = coordinates[1][1] - coordinates[0][1]
  let nextXPoint: number = coordinates[1][0]
  let nextYPoint: number = coordinates[1][1]

  for (let i = 2; i < coordinates.length; i++) {
    if (
      coordinates[i][0] - nextXPoint === differenceX &&
      coordinates[i][1] - nextYPoint === differenceY
    ) {
      nextXPoint = coordinates[i][0]
      nextYPoint = coordinates[i][1]
      continue
    } else {
      return false
    }
  }

  return true
}

// console.log(
//   checkStraightLine([
//     [1, 1],
//     [2, 2],
//     [3, 4],
//     [4, 5],
//     [5, 6],
//     [7, 7],
//   ])
// )
// console.log(
//   checkStraightLine([
//     [1, 2],
//     [2, 3],
//     [3, 4],
//     [4, 5],
//     [5, 6],
//     [6, 7],
//   ])
// )
console.log(
  checkStraightLine([
    [0, 0],
    [0, 1],
    [0, -1],
  ])
)
