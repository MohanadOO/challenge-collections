//https://leetcode.com/problems/ipo

/* 
    k - Distinct projects before the IPO
    w - Initial capital
    profits - The profit for each project
    capital - Capital for each project
*/

// Solution => https://leetcode.com/problems/ipo/solutions/1448062/javascript-with-out-heap/
function findMaximizedCapital(
  k: number,
  w: number,
  profits: number[],
  capital: number[]
): number {
  if (w >= Math.max(...capital)) {
    profits.sort((a, b) => b - a)
    return profits.slice(0, k).reduce((a, b) => a + b, w)
  }

  for (let i = 0; i < k; i++) {
    let maxProfit = -Infinity
    let projectIndex = -1
    for (let j = 0; j < profits.length; j++) {
      if (w < capital[j]) continue
      if (profits[j] >= maxProfit) {
        projectIndex = j
        maxProfit = profits[j]
      }
    }
    if (projectIndex === -1) break
    capital[projectIndex] = Infinity
    w += maxProfit
  }
  return w
}

console.log(findMaximizedCapital(10, 0, [1, 2, 3], [0, 1, 2]))
console.log(findMaximizedCapital(1, 10, [1, 2, 3], [0, 0, 0]))
console.log(findMaximizedCapital(1, 2, [1, 2, 3], [1, 1, 2]))
console.log(findMaximizedCapital(1, 0, [1, 2, 3], [1, 1, 2]))
console.log(findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1]))
console.log(findMaximizedCapital(3, 0, [1, 2, 3], [0, 1, 2]))
