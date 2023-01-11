//https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/description

function minTime(n: number, edges: number[][], hasApple: boolean[]): number {
  let adj = new Array(n)

  for (let i = 0; i < n; i++) {
    adj[i] = []
  }
  for (let x of edges) {
    adj[x[0]].push(x[1])
    adj[x[1]].push(x[0])
  }

  return dfs(-1, 0, adj, hasApple)

  function dfs(
    prev: number,
    curr: number,
    adj: number[][],
    hasApple: boolean[]
  ): number {
    let ans = 0
    for (let x of adj[curr]) {
      if (x === prev) continue

      let res = dfs(curr, x, adj, hasApple)
      if (res > 0 || hasApple[x]) ans += res + 2
    }

    return ans
  }
}

console.log(
  minTime(
    7,
    [
      [0, 1],
      [0, 2],
      [1, 4],
      [1, 5],
      [2, 3],
      [2, 6],
    ],
    [false, false, true, false, true, true, false]
  )
)
