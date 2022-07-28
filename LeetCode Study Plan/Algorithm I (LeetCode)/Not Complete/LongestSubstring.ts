//https://leetcode.com/problems/longest-substring-without-repeating-characters/
//Medium

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s: string): number {
  let tempArr = []
  let subStringLength = 0

  s.split('').forEach((letter) => {
    console.log(letter)

    if (!tempArr.includes(letter)) {
      tempArr.push(letter)
      console.log(tempArr)
    } else if (subStringLength < tempArr.length) {
      subStringLength = tempArr.length
    }
  })
  subStringLength = tempArr.length
  console.log(subStringLength)

  return subStringLength
}

// console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('dvdf'))
// console.log(lengthOfLongestSubstring('aab'))
