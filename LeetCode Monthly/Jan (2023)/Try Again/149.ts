//https://leetcode.com/problems/max-points-on-a-line/


//Solution => https://leetcode.com/problems/max-points-on-a-line/solutions/3016303/java-c-javascript-beats-90-map-o-n-2-time/?languageTags=javascript
function maxPoints(points: number[][]): number {
  let max = 0

  for (const x of points) {
    const slopes = new Map()
    for (const y of points) {
      if (x === y) continue

      let slope = Infinity
      if (y[0] - x[0] !== 0) {
        slope = (y[1] - x[1]) / (y[0] - x[0])
      }

      if (slopes.has(slope)) slopes.set(slope, slopes.get(slope) + 1)
      else slopes.set(slope, 1)
      max = Math.max(max, slopes.get(slope))
    }
  }

  return max + 1
}

console.log(
  maxPoints([
    [1, 1],
    [2, 2],
    [3, 3],
  ])
)

console.log(
  maxPoints([
    [1, 1],
    [3, 2],
    [5, 3],
    [4, 1],
    [2, 3],
    [1, 4],
  ])
)
