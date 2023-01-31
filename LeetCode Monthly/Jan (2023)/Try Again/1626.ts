//https://leetcode.com/problems/best-team-with-no-conflicts

function bestTeamScore(scores: number[], ages: number[]): number {
  //   return bestTeamScoreAttempt(scores, ages)
  return bestTeamScoreSol(scores, ages)
}

function bestTeamScoreAttempt(scores: number[], ages: number[]): number {
  const merge = ages
    .map((val, index) => [scores[index], val])
    .sort((a, b) => a[1] - b[1])

  let maxSum = 0
  const map = new Map()
  for (let i = 0; i < merge.length; i++) {
    const [score, age] = merge[i]
    maxSum = Math.max(maxSum, score)
    for (const [currAge, [baseScore, totalScore]] of map) {
      const total = totalScore + score
      if (
        baseScore < score ||
        currAge === age ||
        (score === baseScore && currAge > age)
      ) {
        map.set(currAge, [baseScore, total])
        maxSum = Math.max(maxSum, total)
      }
    }
    if (!map.has(age)) map.set(age, [score, score])
  }

  return maxSum
}

// Solution => https://leetcode.com/problems/best-team-with-no-conflicts/solutions/3120842/javascript-very-very-easy-to-understand-solution-with-video-explanation/?orderBy=most_votes&languageTags=javascript
function bestTeamScoreSol(scores: number[], ages: number[]): number {
  const arr = ages.map((val, index) => [val, scores[index]])
  arr.sort((a, b) => (a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]))

  let res = new Array(scores.length).fill(0)
  res[0] = arr[0][1]

  for (let i = 1; i < arr.length; i++) {
    let [currAge, currScore] = arr[i]
    res[i] = currScore
    for (let j = i - 1; j >= 0; j--) {
      let [prevAge, prevScore] = arr[j]
      if (prevAge === currAge) res[i] = Math.max(res[i], res[j] + currScore)
      else {
        if (currScore >= prevScore) {
          res[i] = Math.max(res[i], res[j] + currScore)
        }
      }
    }
  }

  return Math.max(...res)
}

console.log(bestTeamScore([1, 3, 5, 10, 15], [1, 2, 3, 4, 5]))
// console.log(bestTeamScore([4, 5, 6, 5], [2, 1, 2, 1]))
// console.log(bestTeamScore([1, 2, 3, 5], [8, 9, 10, 1]))
// console.log(bestTeamScore([1], [4]))
// console.log(bestTeamScore([9, 2, 8, 8, 2], [4, 1, 3, 3, 5]))
// console.log(
//   bestTeamScore(
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [811, 364, 124, 873, 790, 656, 581, 446, 885, 134]
//   )
// )
// console.log(
//   bestTeamScore(
//     [
//       319776, 611683, 835240, 602298, 430007, 574, 142444, 858606, 734364,
//       896074,
//     ],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
//   )
// )
