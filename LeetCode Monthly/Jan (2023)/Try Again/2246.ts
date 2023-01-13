//https://leetcode.com/problems/longest-path-with-different-adjacent-characters/

//Solution => https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solutions/3043261/j-dfs-bottomup-detail-explanation/
function longestPath(parent: number[], s: string): number {
  let n = parent.length
  let children = new Array(n)

  for (let i = 0; i < n; i++) children[i] = []
  for (let i = 1; i < n; i++) children[parent[i]].push(i)

  let longestPath = 0
  function dfs(node: number): number {
    let longestLength = 0
    let secondLongestLength = 0

    for (let child of children[node]) {
      let lengthChild = dfs(child)

      if (s[node] === s[child]) continue

      if (longestLength < lengthChild) {
        secondLongestLength = longestLength
        longestLength = lengthChild
      } else if (secondLongestLength < lengthChild) {
        secondLongestLength = lengthChild
      }
    }
    longestPath = Math.max(longestPath, longestLength + secondLongestLength + 1)
    return longestLength + 1
  }

  dfs(0)
  return longestPath
}

console.log(longestPath([-1, 0, 0, 1, 1, 2], 'abacbe'))
