//https://leetcode.com/problems/contains-duplicate/
//Easy

function containsDuplicate(nums: number[]): boolean {
  //   return containsDuplicateNestedLoop(nums)
  return containsDuplicateUsingSet(nums)
}

//Nested Loop O(n^2)
function containsDuplicateNestedLoop(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue
      if (nums[i] === nums[j]) return true
    }
  }
  return false
}

//Using Sets
function containsDuplicateUsingSet(nums: number[]): boolean {
  const numberSet = new Set(nums)
  return numberSet.size != nums.length
}

console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))
// console.log(containsDuplicate([1, 1]))
