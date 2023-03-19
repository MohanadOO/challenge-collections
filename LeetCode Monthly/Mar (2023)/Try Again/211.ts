//https://leetcode.com/problems/design-add-and-search-words-data-structure/

// I couldn't figure out how to navigate through the data structure to find all possibilities but that can be done using DFS.

// Solution => https://leetcode.com/problems/design-add-and-search-words-data-structure/solutions/499657/javascript-solution-trie-dfs
class WordDictionary {
  private trie: object
  constructor() {
    this.trie = {}
  }

  addWord(word: string): void {
    let node = this.trie
    for (const char of word) {
      if (!node[char]) node[char] = {}
      node = node[char]
    }
    node['isEnd'] = true
  }

  search(word: string): boolean {
    return this.dfs(word, 0, this.trie)
  }

  dfs(word: string, index: number, node: object): boolean {
    if (index === word.length) return node['isEnd'] || false

    if (word[index] === '.') {
      for (let key in node) {
        if (this.dfs(word, index + 1, node[key])) return true
      }
    } else {
      if (node[word[index]]) {
        return this.dfs(word, index + 1, node[word[index]])
      }
    }
    return false
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
let word = new WordDictionary()
console.log(word.addWord('bad'))
console.log(word.addWord('dad'))
console.log(word.addWord('mad'))
console.log(word.search('pad'))
console.log(word.search('bad'))
console.log(word.search('.ad'))
console.log(word.search('b..'))
