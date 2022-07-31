//https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/
//Easy

function canMakeArithmeticProgression(arr: number[]): boolean {
  arr.sort((a, b) => a - b)
  const difference = Math.abs(arr[0] - arr[1])

  return arr.every((number, index) => {
    if (Math.abs(number - arr[index + 1]) === difference) {
      return true
    }
    else if (arr[index + 1] === undefined) {
        return true
    }
    else {
        return false
    }
  })
}

console.log(canMakeArithmeticProgression([3, 5, 1]))
