//https://leetcode.com/problems/concatenated-words/

function findAllConcatenatedWordsInADict(words: string[]): string[] {
//   return Attempt(words)

  // Solution => https://leetcode.com/problems/concatenated-words/solutions/573115/simple-solution-javascript-beats-90-with-explanation/
  return Sol(words)
}

function Attempt(words: string[]): string[] {
  const map = new Map()
  const res: string[] = []

  for (const word of words) {
    map.set(word, [])
  }

  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    for (let j = 0; j < words.length; j++) {
      const val = words[j]
      if (val === word) continue
      if (val.includes(word)) {
        map.set(val, map.get(val) + 1)
      }
    }
  }
  for (const [key, value] of map) {
    if (value.length >= 2) res.push(key)
  }

  return res
}

function Sol(words: string[]): string[] {
  const dict = new Set(words)

  function isConcat(word: string): boolean {
    if (dict.has(word)) return true
    for (let i = 0; i < word.length; i++) {
      let prefix = word.slice(0, i + 1)
      if (dict.has(prefix)) {
        let suffix = word.slice(i + 1)
        let result = isConcat(suffix)
        if (result) {
          dict.add(word)
          return true
        }
      }
    }

    return false
  }

  const result: string[] = []
  for (const word of words) {
    dict.delete(word)
    if (isConcat(word)) result.push(word)
    dict.add(word)
  }
  return result
}

console.log(
  findAllConcatenatedWordsInADict([
    'cat',
    'cats',
    'catsdogcats',
    'dog',
    'dogcatsdog',
    'hippopotamuses',
    'rat',
    'ratcatdogcat',
  ])
)
console.log(findAllConcatenatedWordsInADict(['a', 'b', 'ab', 'abc']))
