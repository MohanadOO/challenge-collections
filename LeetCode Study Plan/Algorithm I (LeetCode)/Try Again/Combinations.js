//https://leetcode.com/problems/combinations/
//Medium

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
let combine = function (n, k) {
  const result = []
  const combinations = new Array(k)
  console.log(combinations)
  
  function dfs(k, i = 1) {
    while(i <= n){
        combinations[combinations.length - k] = i++;
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
