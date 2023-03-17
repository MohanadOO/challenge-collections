//https://leetcode.com/problems/implement-trie-prefix-tree/

class TrieNode {
  private child: object
  public isEnd: boolean

  constructor(child = {}, isEnd = false) {
    this.child = child
    this.isEnd = isEnd
  }
}

class Trie {
  private list: TrieNode

  constructor() {
    this.list = new TrieNode()
  }

  insert(word: string): void {
    let node = this.list
    for (const char of word) {
      if (!node[char]) node[char] = new TrieNode()
      node = node[char]
    }
    node.isEnd = true
  }

  search(word: string): boolean {
    let node = this.list
    for (const char of word) {
      if (!node[char]) return false
      node = node[char]
    }
    return node.isEnd
  }

  startsWith(prefix: string): boolean {
    let node = this.list
    for (const char of prefix){
        if (!node[char]) return false
        node = node[char]
    }
    return true
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
let obj = new Trie()
console.log(obj.insert('apple'))
console.log(obj.search('apple'))
console.log(obj.search('app'))
console.log(obj.startsWith('app'))
console.log(obj.insert('app'))
console.log(obj.search('app'))
