//https://leetcode.com/problems/combinations/
//Medium

function combine(n: number, k: number): number[][] | [] {
  const result = []
  const combinations = new Array(k)

  const dfs = (k: number, i = 1) => {
    while (n >= i) {
      combinations[combinations.length - k] = i++
      k > 1 ? dfs(k - 1, i) : result.push([...combinations])
    }
  }

  dfs(k)
  return result
}

console.log(combine(4, 2))
// console.log(combine(3, 4))
// console.log(combine(2, 1))
// console.log(combine(2, 2))
// console.log(combine(1,1))
