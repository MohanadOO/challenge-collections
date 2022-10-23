//https://leetcode.com/problems/set-mismatch/
//Easy

/*
    - Some error made a number got duplicated to another number in the set and loss of another number. 
    - Find the number that occurs twice and the missing number.
*/

function findErrorNums(nums: number[]): number[] {
  nums.sort((a, b) => a - b)

  const result: number[] = []
  let missing: number | undefined;

  for (let i = 1; i < nums.length; i++) {
    const current = nums[i - 1]
    const next = nums[i]
    if (i !== current && missing === undefined) missing = i;
    if (current === next) {
      result.push(current)
      if (missing === undefined) missing = lookAhead(current, nums, i)
      result.push(missing)
      break
    }
  }

  function lookAhead(current: number, nums: number[], i: number): number {
    const next = nums[i + 1];
    if (current + 1 === next) return lookAhead(current + 1, nums, i + 1)
    else return current + 1
  }
  return result
}

console.log(findErrorNums([1, 2, 2, 4]))
console.log(findErrorNums([1, 1]))
console.log(findErrorNums([2, 2]))
console.log(findErrorNums([1, 3, 3, 4]))
console.log(findErrorNums([2, 3, 2]))
console.log(findErrorNums([3,2,3,4,6,5]))
console.log(findErrorNums([1, 5, 3, 2, 2, 7, 6, 4, 8, 9]))
console.log(findErrorNums([5, 3, 6, 1, 5, 4, 7, 8]))
