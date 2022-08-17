//https://leetcode.com/problems/add-to-array-form-of-integer/
//Easy

function addToArrayForm(num: number[], k: number): number[] {
  return (BigInt(num.join('')) + BigInt(k))
    .toString()
    .split('')
    .map((num) => Number(num))
}

console.log(addToArrayForm([1, 2, 0, 0], 34))
console.log(addToArrayForm([2, 7, 4], 181))
// console.log(
//   addToArrayForm(
//     [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
//     516
//   )
// )
