//https://leetcode.com/problems/permutation-in-string/
//Medium

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

let checkInclusion = function (s1, s2) {
  const sortS1 = s1.split('').sort().join('')

  for (let i = 0; i <= s2.length - s1.length; i++) {
    if (
      s2
        .substring(i, i + s1.length)
        .split('')
        .sort()
        .join('') === sortS1
    )
      return true
  }
  return false
}

// console.log(checkInclusion('ab', 'eidbaoo'))
// console.log(checkInclusion('ab', 'eidboaoo'))
// console.log(checkInclusion('adc', 'dcda'))
// console.log(checkInclusion('adc', 'bbbca'))
// console.log(checkInclusion('ab', 'ab'))
// console.log(checkInclusion('hello', 'ooolleoooleh'))
// console.log(checkInclusion('abcdxabcde', 'abcdeabcdx'))
