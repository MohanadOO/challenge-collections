//https://leetcode.com/problems/most-profit-assigning-work/?envType=study-plan&id=binary-search-ii

type ObjectType = {
  diff: number
  profit: number
}

function maxProfitAssignment(
  difficulty: number[],
  profit: number[],
  worker: number[]
): number {
  let difficultyArr: ObjectType[] = []
  for (let j = 0; j < difficulty.length; j++) {
    const currDiff = difficulty[j]
    const currProfit = profit[j]
    difficultyArr.push({ diff: currDiff, profit: currProfit })
  }

  difficultyArr.sort((a, b) => a['diff'] - b['diff'])

  let profitResult: number[] = []
  for (let i = 0; i < worker.length; i++) {
    const work = worker[i]

    let left = 0
    let right = difficultyArr.length - 1
    let maxProfit = 0

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2)

      const currDiff = difficultyArr[mid]['diff']
      const currProfit = difficultyArr[mid]['profit']

      if (maxProfit < currProfit && currDiff <= work) {
        maxProfit = currProfit
      }

      if (currDiff > work) right = mid - 1
      else left = mid + 1
    }

    for (let g = 0; g < left; g++) {
      const currProfit = difficultyArr[g]['profit']
      if (currProfit > maxProfit) maxProfit = currProfit
    }

    profitResult.push(maxProfit)
  }
  return profitResult.reduce((a, b) => a + b, 0)
}

console.log(
  maxProfitAssignment([2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7])
)
console.log(maxProfitAssignment([85, 47, 57], [24, 66, 99], [40, 25, 25]))
console.log(
  maxProfitAssignment(
    [68, 35, 52, 47, 86],
    [67, 17, 1, 81, 3],
    [92, 10, 85, 84, 82]
  )
)
