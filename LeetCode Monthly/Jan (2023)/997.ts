//https://leetcode.com/problems/find-the-town-judge

function findJudge(n: number, trust: number[][]): number {
  if (n === 1) return 1
  if (trust.length < 1) return -1
  const guard = new Map().set(trust[0][0], -1).set(trust[0][1], 1)

  for (let i = 1; i < trust.length; i++) {
    const guardInfo = guard.get(trust[i][1])
    guard.set(trust[i][0], -1)
    if (guardInfo && guardInfo !== -1) {
      guard.set(trust[i][1], guardInfo + 1)
    } else if (!guardInfo) {
      guard.set(trust[i][1], 1)
    }
  }

  for (const [key, value] of guard) {
    if (value === n - 1) return key
  }
  return -1
}

console.log(findJudge(1, []))
console.log(findJudge(2, [[1, 2]]))
console.log(
  findJudge(2, [
    [1, 2],
    [2, 1],
  ])
)
console.log(
  findJudge(4, [
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [4, 3],
  ])
)
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
  ])
)
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
    [3, 1],
  ])
)
