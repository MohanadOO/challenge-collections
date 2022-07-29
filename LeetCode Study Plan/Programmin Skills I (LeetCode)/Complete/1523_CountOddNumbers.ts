//https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/
//Easy

//O(n)
// function countOdds(low: number, high: number): number {
//   let count = 0
//   for (let i = low; i <= high; i++) {
//     if (i % 2 === 1) {
//       count++
//     }
//   }
//   return count
// }

//Second Solution
// O(1)
function countOdds(low: number, high: number): number {
  const isFirstOdd = low % 2 === 1 ? true : false
  const isLastOdd = high % 2 === 1 ? true : false
  let difference = Math.floor((high - low) / 2)

  return isFirstOdd || isLastOdd ? difference + 1 : difference
}

console.log(countOdds(0, 10))
console.log(countOdds(3, 7))
console.log(countOdds(8, 10))
console.log(countOdds(21, 22))
console.log(countOdds(14, 17))
