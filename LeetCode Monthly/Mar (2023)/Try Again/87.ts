//https://leetcode.com/problems/scramble-string

// Not Complete
function isScrambleSol(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false
  if (s1.length === 1) return s1 === s2

  let countRandom = count(
    s1.substring(0, s1.length / 2),
    s1.substring(s1.length / 2)
  )

  function count(x: string, y: string, totalX = 0, totalY = 0): number {
    if (x.length === 1 && y.length === 1) return totalX + totalY
    if (x.length > 1) {
      totalX = count(
        x.substring(0, x.length / 2),
        x.substring(x.length / 2),
        totalX + 2,
        totalY
      )
    }
    if (y.length > 1) {
      totalY = count(
        y.substring(0, y.length / 2),
        y.substring(y.length / 2),
        totalX,
        totalY + 2
      )
    }
    console.log(totalX, totalY)
    return totalX + totalY
  }

  const subString: string[][] = new Array(s1.length + 1).fill([]).map((x) => [])
  function dp(x: string, y: string, z: number): boolean | void {
    const random = Math.floor(Math.random() * 2)
    subString[z].push(random === 1 ? x : y)
    subString[z].push(random === 1 ? y : x)
    // if (z + 1 < subString.length){
    subString[z + 1].push(random === 1 ? y : x)
    subString[z + 1].push(random === 1 ? x : y)
    // }

    if (x.length > 1)
      dp(x.substring(0, x.length / 2), x.substring(x.length / 2), z)
    if (y.length > 1)
      dp(y.substring(0, y.length / 2), y.substring(y.length / 2), z)
    //   console.log(subString)
    return subString.filter((sub) => sub.length === 1).join('') === s2
  }

  return dp(s1.substring(0, s1.length / 2), s1.substring(s1.length / 2), 0)
    ? true
    : false
}

// Solution => https://leetcode.com/problems/scramble-string/solutions/3358626/simple-recursive-solution-3d-array-solution-with-detailed-comments/
function isScramble(s1: string, s2: string, memo = {}): boolean {
  const key = `${s1}-${s2}`
  if (key in memo) return memo[key]
  if (s1 === s2) return true

  function hasSameChars(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) return false
    const charCount = {}
    for (let i = 0; i < word1.length; i++) {
      const char1 = word1[i]
      const char2 = word2[i]
      charCount[char1] = char1 in charCount ? charCount[char1] + 1 : 1
      charCount[char2] = char2 in charCount ? charCount[char2] - 1 : -1
    }
    for (const char in charCount) {
      if (charCount[char] !== 0) return false
    }
    return true
  }

  if (!hasSameChars(s1, s2)) {
    memo[key] = false
    return false
  }

  const length = s1.length
  for (let i = 1; i < length; i++) {
    if (
      (isScramble(s1.slice(0, i), s2.slice(0, i), memo) &&
        isScramble(s1.slice(i), s2.slice(i), memo)) ||
      (isScramble(s1.slice(0, i), s2.slice(length - i), memo) &&
        isScramble(s1.slice(i), s2.slice(0, length - i), memo))
    ) {
      memo[key] = true
      return true
    }
  }
  memo[key] = false
  return false
}

console.log(isScramble('great', 'rgeat'))
console.log(isScramble('abcde', 'caebd'))
console.log(isScramble('a', 'a'))
