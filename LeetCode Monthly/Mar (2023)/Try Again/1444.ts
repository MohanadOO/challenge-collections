//https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/description

// Solution => https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/solutions/2463252/javascript-dp-prefix-sum
function ways(pizza: string[], k: number): number {
  let rows = pizza.length
  let cols = pizza[0].length
  const mod = 10e8 + 7

  let apples = Array(rows + 1)
    .fill(0)
    .map(() => Array(cols + 1).fill(0))

  let memo = Array(rows)
    .fill(0)
    .map(() =>
      Array(cols)
        .fill(0)
        .map(() => Array(k + 1).fill(-1))
    )

  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 0; j--) {
      let curr = pizza[i][j] === 'A' ? 1 : 0
      apples[i][j] =
        apples[i][j + 1] + apples[i + 1][j] - apples[i + 1][j + 1] + curr
    }
  }
  return dp(0, 0, k)

  function dp(i: number, j: number, k: number): number {
    if (k === 1) return apples[i][j] > 0 ? 1 : 0
    if (apples[i][j] === 0) return 0
    if (memo[i][j][k] !== -1) return memo[i][j][k]

    let ans = 0
    for (let row = i; row < rows - 1; row++) {
      if (apples[row + 1][j] === apples[i][j]) continue
      ans = (ans + dp(row + 1, j, k - 1)) % mod
    }
    for (let col = j; col < cols - 1; col++) {
      if (apples[i][col + 1] === apples[i][j]) continue
      ans = (ans + dp(i, col + 1, k - 1)) % mod
    }
    return (memo[i][j][k] = ans)
  }
}

console.log(ways(['A..', 'AAA', '...'], 3))
console.log(ways(['A..', 'AA.', '...'], 3))
console.log(ways(['A..', 'A..', '...'], 1))
