//https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
//Easy

function sumOddLengthSubarrays(arr: number[]): number {
  let answer = 0

  for (let i = 0; i < arr.length; i++) {
    let total = i * (arr.length - i) + (arr.length - i)
    answer += Math.ceil(total / 2) * arr[i]
  }
  return answer
}

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]))
