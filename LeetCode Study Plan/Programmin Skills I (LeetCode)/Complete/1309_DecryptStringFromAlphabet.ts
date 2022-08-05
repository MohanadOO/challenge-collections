//https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
//Easy

function freqAlphabets(s: string): string {
  return s
    .match(/\d{2}#|\d/g)
    .map((num) => {
      if (num.length === 3) {
        return String.fromCharCode(Number(num[0] + num[1]) + 96)
      }
      return String.fromCharCode(96 + Number(num))
    })
    .join('')
}

console.log(freqAlphabets('10#11#12'))
console.log(freqAlphabets('1326#'))
