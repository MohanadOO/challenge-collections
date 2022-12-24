//https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/?envType=study-plan&id=binary-search-ii

//Solution => https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/solutions/830424/javascript-use-two-pointer-method-o-n/?envType=study-plan&id=binary-search-ii&languageTags=javascript
function findLengthOfShortestSubarray(arr: number[]): number {
  let left = 0
  let pos: number[][] = []

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      if (pos.length === 2) pos.pop()
      pos.push([left, i - 1])
      left = i
    }
  }

  if (pos.length == 2) pos.pop()
  pos.push([left, arr.length - 1])
  if (pos.length < 2) return 0

  let res = arr.length
  let i = 0
  let j = pos[1][0]

  while (i <= pos[0][1] && j <= pos[1][1]) {
    if (arr[i] > arr[j]) {
      res = Math.min(res, j - pos[1][0] + pos[0][1] - i + 1)
      j++
    } else i++
  }

  res = Math.min(res, j - pos[1][0])
  return res + (pos[1][0] - 1) - (pos[0][1] + 1) + 1
}

console.log(findLengthOfShortestSubarray([1, 2, 3, 10, 4, 2, 3, 5]))
console.log(findLengthOfShortestSubarray([5, 4, 3, 2, 1]))
console.log(findLengthOfShortestSubarray([1, 2, 3]))
