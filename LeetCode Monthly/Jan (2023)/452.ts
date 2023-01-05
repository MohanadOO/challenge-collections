//https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/

//Explanation => https://www.youtube.com/watch?v=uC0aDIhwGdE
function findMinArrowShots(points: number[][]): number {
  points.sort((a: number[], b: number[]) => a[1] - b[1])

  let arrow: number = 1
  let end = points[0][1]

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > end) {
      arrow++
      end = points[i][1]
    }
  }

  return arrow
}

console.log(
  findMinArrowShots([
    [3, 9],
    [7, 12],
    [3, 8],
    [6, 8],
    [9, 10],
    [2, 9],
    [0, 9],
    [3, 9],
    [0, 6],
    [2, 8],
  ])
)

console.log(
  findMinArrowShots([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
  ])
)
