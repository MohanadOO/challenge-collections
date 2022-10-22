//https://leetcode.com/problems/contains-duplicate-ii/
//Easy

/*
    - Given an integer array return true if there is are two distinct indices i and j in the array.
*/

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    //Assign nums values to an object.
    // return containsNearbyDuplicateObj(nums, k)
    //Assign nums values using Map.
    return containsNearbyDuplicateMap(nums, k)
}

function containsNearbyDuplicateObj(nums: number[], k: number): boolean {
  const len = nums.length
  const numbers = {}

  for (let i = 0; i <= len; i++) {
    const curr = nums[i]

    if (numbers[curr] === undefined) {
      numbers[curr] = i
      continue
    }
    if (Math.abs(numbers[curr] - i) <= k) return true
    else numbers[curr] = i
  }

  return false
}

function containsNearbyDuplicateMap(nums: number[], k: number): boolean {
  const len = nums.length
  const hasMap = new Map()

  for (let i = 0; i < len; i++) {
    if (Math.abs(i - hasMap.get(nums[i])) <= k) return true
    hasMap.set(nums[i], i)
  }

  return false
}


console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))
