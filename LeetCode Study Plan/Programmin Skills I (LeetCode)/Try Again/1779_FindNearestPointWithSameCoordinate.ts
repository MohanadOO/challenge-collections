//https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/
//Easy

//Need Improvment
function nearestValidPoint(x: number, y: number, points: number[][]): number {
  let distance: number | undefined
  let location: number | undefined

  for (let i = 0; i < points.length; i++) {
    if (x === points[i][0] && y === points[i][1]) {
      return i
    }

    if (x === points[i][0]) {
      if (typeof distance === 'undefined') {
        distance = Math.abs(y - points[i][1])
        location = i
      } else if (distance >= Math.abs(y - points[i][1])) {
        if (distance !== Math.abs(y - points[i][1])) {
          location = i
        }
        distance = Math.abs(y - points[i][1])
      }
    } else if (y === points[i][1]) {
      if (typeof distance === 'undefined') {
        distance = Math.abs(x - points[i][0])
        location = i
      } else if (distance >= Math.abs(x - points[i][0])) {
        if (distance !== Math.abs(x - points[i][0])) {
          location = i
        }
        distance = Math.abs(x - points[i][0])
      }
    }
  }

  if (typeof location === 'undefined') {
    return -1
  }

  return location
}

// console.log(
//   nearestValidPoint(3, 4, [
//     [1, 2],
//     [3, 1],
//     [2, 4],
//     [2, 3],
//     [4, 4],
//   ])
// )
// console.log(
//   nearestValidPoint(2, 2, [
//     [5, 4],
//     [3, 4],
//     [1, 3],
//     [3, 2],
//     [1, 7],
//     [4, 2],
//   ])
// )

console.log(
  nearestValidPoint(27, 27, [
    [32, 23],
    [29, 9],
    [23, 18],
    [25, 32],
    [6, 34],
    [22, 5],
    [16, 24],
    [34, 29],
    [23, 27],
    [9, 32],
    [7, 22],
    [3, 31],
    [4, 30],
    [25, 19],
    [11, 24],
    [20, 23],
    [12, 6],
    [18, 25],
    [7, 28],
    [22, 1],
    [3, 19],
    [33, 2],
    [31, 23],
    [19, 17],
    [20, 35],
    [1, 13],
    [3, 3],
    [7, 21],
    [21, 7],
    [24, 34],
    [18, 13],
    [31, 32],
    [18, 4],
    [31, 19],
    [7, 32],
    [4, 11],
    [32, 22],
    [21, 19],
    [21, 21],
    [16, 27],
    [16, 28],
    [19, 21],
    [11, 10],
    [30, 29],
    [35, 2],
    [31, 26],
    [18, 34],
    [29, 26],
    [26, 24],
    [34, 21],
    [16, 9],
    [19, 3],
    [24, 9],
    [24, 27],
    [12, 33],
    [14, 5],
    [35, 12],
    [15, 3],
    [21, 35],
    [16, 14],
    [20, 27],
    [22, 27],
    [5, 30],
    [35, 1],
    [23, 2],
    [16, 13],
    [29, 12],
    [29, 25],
    [34, 26],
    [22, 8],
    [8, 14],
    [28, 25],
    [10, 6],
    [24, 27],
    [22, 3],
    [22, 20],
    [20, 9],
    [18, 16],
    [20, 4],
    [34, 12],
    [26, 14],
    [8, 4],
    [16, 4],
    [27, 35],
    [9, 18],
    [11, 1],
    [22, 24],
    [14, 16],
    [18, 16],
    [17, 9],
    [26, 28],
    [21, 3],
    [5, 14],
    [5, 10],
    [30, 4],
  ])
)
