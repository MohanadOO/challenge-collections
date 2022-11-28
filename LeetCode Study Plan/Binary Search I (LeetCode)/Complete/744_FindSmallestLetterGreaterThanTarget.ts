//https://leetcode.com/problems/find-smallest-letter-greater-than-target/?envType=study-plan&id=binary-search-i

function nextGreatestLetter(letters: string[], target: string): string {
  let start = 0
  let end = letters.length - 1

  let search = false
  let targetCode = target.charCodeAt(0)

  while (start <= end) {
    const middle = Math.floor((end + start) / 2)
    const curr = letters[middle].charCodeAt(0)
    if (
      curr < targetCode &&
      search &&
      letters[middle + 1].charCodeAt(0) > targetCode
    ) {
      return letters[middle + 1]
    }
    if (curr > targetCode) {
      end = middle - 1
      search = true
    } else start = middle + 1
  }

  return letters[start] || letters[0]
}

console.log(nextGreatestLetter(['c', 'f', 'j'], 'a'))
console.log(nextGreatestLetter(['c', 'f', 'j'], 'c'))
console.log(nextGreatestLetter(['c', 'f', 'j'], 'g'))
console.log(nextGreatestLetter(['x', 'x', 'y', 'y'], 'z'))
console.log(
  nextGreatestLetter(['e', 'e', 'e', 'k', 'q', 'q', 'q', 'v', 'v', 'y'], 'k')
)
