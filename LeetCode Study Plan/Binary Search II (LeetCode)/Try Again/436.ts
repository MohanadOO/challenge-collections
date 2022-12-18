//https://leetcode.com/problems/find-right-interval/?envType=study-plan&id=binary-search-ii

//Solution => https://leetcode.com/problems/find-right-interval/solutions/814484/javascript-clean-binary-search/
function findRightInterval(intervals: number[][]): number[] {
  const starts = intervals.map(([a, b], j) => [a, j]).sort(([a], [b]) => a - b)

  const res = Array(intervals.length).fill(-1)

  for (let i = 0; i < intervals.length; i++) {
    const curr = intervals[i][1]
    let left = 0
    let right = starts.length - 1

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2)
      const [val, index] = starts[mid]

      if (val === curr) {
        if (index !== i || curr === intervals[i][0]) {
          res[i] = index
          break
        }
      }
      if (val > curr) {
        res[i] = index
        right = mid - 1
      } else left = mid + 1
    }
  }

  return res
}

console.log(findRightInterval([[1, 2]]))
console.log(
  findRightInterval([
    [3, 4],
    [2, 3],
    [1, 2],
  ])
)
console.log(
  findRightInterval([
    [1, 4],
    [2, 3],
    [3, 4],
  ])
)
console.log(
  findRightInterval([
    [4, 5],
    [2, 3],
    [1, 2],
  ])
)
console.log(
  findRightInterval([
    [1, 1],
    [3, 4],
  ])
)
