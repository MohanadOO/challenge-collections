//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/?envType=study-plan&id=binary-search-i

function twoSum(numbers: number[], target: number): number[] {
  let start = 0
  let end = numbers.length - 1

  for (let i = 0; i < numbers.length; i++) {
    let sum = numbers[start] + numbers[end]
    if (sum === target) return [start + 1, end + 1]

    if (sum < target) start++
    else end--
  }
}
