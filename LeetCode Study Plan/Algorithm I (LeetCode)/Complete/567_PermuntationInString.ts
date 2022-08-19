//https://leetcode.com/problems/permutation-in-string/
//Medium

let checkInclusion1 = function (s1: string, s2: string): boolean {
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

function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false
  if (s1.length === s2.length) {
    s1 = s1.split('').sort().join('')
    s2 = s2.split('').sort().join('')
    return s1 === s2
  }

  s1 = s1.split('').sort().join('')

  for (let i = 0; i <= s2.length - s1.length; i++) {
    const substring = s2.substring(i, i + s1.length)
    const sortSubString = substring.split('').sort().join('')
    if (sortSubString === s1) return true
  }

  return false
}

console.log(checkInclusion('ab', 'eidbaoo'))
console.log(checkInclusion('ab', 'eidboaoo'))
console.log(checkInclusion('adc', 'dcda'))
console.log(checkInclusion('adc', 'bbbca'))
console.log(checkInclusion('ab', 'ab'))
console.log(checkInclusion('hello', 'ooolleoooleh'))
console.log(checkInclusion('abcdxabcde', 'abcdeabcdx'))
