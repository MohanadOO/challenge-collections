//https://leetcode.com/problems/search-insert-position/?envType=study-plan&id=binary-search-i

function searchInsert(nums: number[], target: number): number {
  let start = 0
  let end = nums.length

  while(start <= end){
    const middle = Math.floor((end + start) / 2)
    const currMiddle = nums[middle] 
    
    if (currMiddle === target) return middle
    
    if (currMiddle < target) start = middle + 1
    else end = middle - 1
  }

  return start
}

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))
console.log(searchInsert([1, 3, 5, 6], 6))
