//https://leetcode.com/problems/greatest-common-divisor-of-strings

function gcdOfStrings(s: string, t: string): string {
  return gcdOfStringsBruteForce(s, t)
  return gcdOfStringsGCD(s, t)
}

function gcdOfStringsBruteForce(str1: string, str2: string): string {
  const len1 = str1.length
  const len2 = str2.length

  for (let i = Math.min(len1, len2); i >= 1; --i) {
    if (valid(str1, str2, i)) {
      return str1.substring(0, i)
    }
  }

  function valid(s: string, t: string, index: number): boolean {
    if (len1 % index || len2 % index) return false

    const base = s.substring(0, index)
    const isSub1 = s === base.repeat(len1 / index)
    const isSub2 = t === base.repeat(len2 / index)

    return isSub1 && isSub2
  }

  return ''
}

function gcdOfStringsGCD(s: string, t: string): string {
  if (s + t !== t + s) return ''

  function gcd(x: number, y: number) {
    console.log(x, y)
    console.log(x % y)
    if (y === 0) return x
    return gcd(y, x % y)
  }

  let gcdLength = gcd(s.length, t.length)
  return s.substring(0, gcdLength)
}

console.log(gcdOfStrings('ABCABC', 'ABC'))
console.log(gcdOfStrings('ABABAB', 'ABAB'))
