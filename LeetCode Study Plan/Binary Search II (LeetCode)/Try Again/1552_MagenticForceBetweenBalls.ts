//https://leetcode.com/problems/magnetic-force-between-two-balls/?envType=study-plan&id=binary-search-ii

//Solution => https://leetcode.com/problems/magnetic-force-between-two-balls/solutions/794066/simple-explanation/?envType=study-plan&id=binary-search-ii
function maxDistance(position: number[], m: number): number {
  position.sort((a, b) => a - b)
  let lo = 1
  let hi = position[position.length - 1]

  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo + 1) / 2)
    if (check(position, mid, m)) lo = mid
    else hi = mid - 1
  }

  function check(position: number[], mid: number, m: number): boolean {
    let lastBallPosition = position[0]
    let ballsLeft = m - 1

    let idx = 1
    while (idx < position.length && ballsLeft > 0) {
      if (position[idx] - lastBallPosition >= mid) {
        lastBallPosition = position[idx]
        ballsLeft--
      }
      idx++
    }

    return ballsLeft === 0
  }

  return lo
}

console.log(maxDistance([1, 2, 3, 4, 7], 3))
console.log(maxDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4))
console.log(maxDistance([79, 74, 57, 22], 4))
console.log(maxDistance([5, 4, 3, 2, 1, 1000000000], 2))
