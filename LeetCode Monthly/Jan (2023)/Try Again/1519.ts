//https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label

function countSubTrees(n: number, edges: number[][], labels: string): number[] {
  let res = new Array(n)

  let adj: number[][] = new Array(n).fill(0).map((ele) => (ele = []))
  for (let x of edges) {
    adj[x[0]].push(x[1])
    adj[x[1]].push(x[0])
  }

  dfs(-1, 0, adj, labels, res)
  return res
}

function dfs(
  prev: number,
  curr: number,
  adj: number[][],
  labels: string,
  res: number[]
): number[] {
  let ans = new Array(26).fill(0)

  for (let x of adj[curr]) {
    if (prev === x) continue

    const total = dfs(curr, x, adj, labels, res)
    for (let i = 0; i < 26; i++) ans[i] += total[i]
  }

  res[curr] = ++ans[labels.charCodeAt(curr) - 'a'.charCodeAt(0)]
  return ans
}

console.log(
  countSubTrees(
    7,
    [
      [0, 1],
      [0, 2],
      [1, 4],
      [1, 5],
      [2, 3],
      [2, 6],
    ],
    'abaedcd'
  )
)
