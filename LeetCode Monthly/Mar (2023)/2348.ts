//https://leetcode.com/problems/number-of-zero-filled-subarrays/

function zeroFilledSubarray(nums: number[]): number {
    let total = 0;
    let zeroCount = 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            zeroCount = 1;
            continue;
        }
        
        total += zeroCount;
        zeroCount++
    }

    return total
}

console.log(zeroFilledSubarray([1,3,0,0,2,0,0,4]))
console.log(zeroFilledSubarray([1,3,0,0,2,0,0,4]))
console.log(zeroFilledSubarray([0,0,0,2,0,0]))