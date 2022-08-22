//https://leetcode.com/problems/next-greater-element-iii/
//Medium

//Solution => https://leetcode.com/problems/next-greater-element-iii/discuss/896546/O(N)-JS-Solution-with-explanation
function nextGreaterElement(n: number): number {
  let pivot = -1
  const arr = n.toString().split('')

  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i - 1] < arr[i]) {
      pivot = i - 1
      break
    }
  }
  if (pivot === -1) return -1

  for (let i = arr.length - 1; i > pivot; i--) {
    if (arr[i] > arr[pivot]) {
      ;[arr[pivot], arr[i]] = [arr[i], arr[pivot]]
      break
    }
  }

  let left = arr.slice(0, pivot + 1)
  let right = arr.slice(pivot + 1)
  right.reverse()

  let res = Number(left.join('') + right.join(''))

  return res > Math.pow(2, 31) - 1 ? -1 : res
}

console.log(nextGreaterElement(12))
console.log(nextGreaterElement(534976))
console.log(nextGreaterElement(230241))
console.log(nextGreaterElement(21))
console.log(nextGreaterElement(21))

