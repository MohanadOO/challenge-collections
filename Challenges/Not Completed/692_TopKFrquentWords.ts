//https://leetcode.com/problems/top-k-frequent-words/
//Medium

function topKFrequent(words: string[], k: number): string[] {
  let wordCount = {}
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    if (!wordCount[word]) wordCount[word] = 1
    else wordCount[word]++
  }

  const arr: [string, number][] = Object.entries(wordCount)
  const sortByLetters = arr.sort((a, b) => {
    return a[0] === b[0] ? 0 : a[0] < b[0] ? -1 : 1
  })

  const sortByCount = sortByLetters.sort((a, b) => b[1] - a[1])
  
  const filterArr = sortByCount
    .flat()
    .filter((word) => typeof word === 'string') as string[]

  const result = filterArr.slice(0, k)

  return result
}

console.log(topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 2))
console.log(
  topKFrequent(
    ['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'],
    4
  )
)
