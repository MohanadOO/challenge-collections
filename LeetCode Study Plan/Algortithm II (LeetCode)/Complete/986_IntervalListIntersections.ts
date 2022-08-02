//https://leetcode.com/problems/interval-list-intersections/
//Medium

//Merge Intervals
function intervalIntersection(
  firstList: number[][],
  secondList: number[][]
): number[][] {
  const intersections: [number, number][] = []
  let i = 0,
    j = 0

  while (i < firstList.length && j < secondList.length) {
    const low: number = Math.max(firstList[i][0], secondList[j][0])
    const high: number = Math.min(firstList[i][1], secondList[j][1])
    if (low <= high) {
      intersections.push([low, high])
    }

    if (firstList[i][1] < secondList[j][1]) {
      i++
    } else {
      j++
    }
  }

  return intersections
}

console.log(
  intervalIntersection(
    [
      [0, 2],
      [5, 10],
      [13, 23],
      [24, 25],
    ],
    [
      [1, 5],
      [8, 12],
      [15, 24],
      [25, 26],
    ]
  )
)
