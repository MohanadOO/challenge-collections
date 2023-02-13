//https://leetcode.com/problems/count-odd-numbers-in-an-interval-range

function countOdds(low: number, high: number): number {
  return Math.floor((high - low) / 2) + (low % 2 || high % 2)
}

console.log(countOdds(3, 10))
console.log(countOdds(3, 50))
console.log(countOdds(14, 17))
