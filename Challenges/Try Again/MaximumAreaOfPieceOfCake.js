//https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/
//Medium

let maxArea = function (height, width, horizontalCuts, verticalCuts) {
  horizontalCuts.sort((a, b) => a - b)
  verticalCuts.sort((a, b) => a - b)

  let maxHorizontal = Math.max(
    horizontalCuts[0],
    height - horizontalCuts[horizontalCuts.length - 1]
  )

  let maxVertical = Math.max(
    verticalCuts[0],
    width - verticalCuts[verticalCuts.length - 1]
  )

  for (let i = 1; i < horizontalCuts.length; i++) {
    maxHorizontal = Math.max(
      maxHorizontal,
      horizontalCuts[i] - horizontalCuts[i - 1]
    )
  }

  for (let i = 1; i < verticalCuts.length; i++) {
    maxVertical = Math.max(maxVertical, verticalCuts[i] - verticalCuts[i - 1])
  }

  return (BigInt(maxHorizontal) * BigInt(maxVertical)) % 1000000007n
}

console.log(maxArea(5, 4, [1, 2, 4], [1, 3]))
console.log(maxArea(5, 4, [3, 1], [1]))
console.log(maxArea(5, 4, [3], [3]))
