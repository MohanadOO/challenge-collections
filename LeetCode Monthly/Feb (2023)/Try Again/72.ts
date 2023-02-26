//https://leetcode.com/problems/edit-distance/

// Recursive Solution O(3 ^ M) Time Complexity
function minDistance(word1: string, word2: string): number {
  return minDistanceRecur(word1, word2, word1.length, word2.length)

  function minDistanceRecur(
    word1: string,
    word2: string,
    w1: number,
    w2: number
  ): number {
    if (w1 === 0) return w2
    if (w2 === 0) return w1

    if (word1.charAt(w1 - 1) === word2.charAt(w2 - 1)) {
      return minDistanceRecur(word1, word2, w1 - 1, w2 - 1)
    } else {
      const insert = minDistanceRecur(word1, word2, w1, w2 - 1)
      const del = minDistanceRecur(word1, word2, w1 - 1, w2)
      const replace = minDistanceRecur(word1, word2, w1 - 1, w2 - 1)

      return Math.min(insert, Math.min(del, replace)) + 1
    }
  }
}

// Solution => https://leetcode.com/problems/edit-distance/solutions/428527/javascript-solution/
function minDistanceMemo(word1: string, word2: string): number {
  const dp: number[][] = Array(word1.length + 1)
    .fill(null)
    .map(() => Array(word2.length + 1).fill(0))

  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = i
  }
  for (let i = 0; i < dp[0].length; i++) {
    dp[0][i] = i
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (word1[i - 1] != word2[j - 1] ? 1 : 0)
      )
    }
  }
  return dp[dp.length - 1][dp[0].length - 1]
}

console.log(minDistanceMemo('intention', 'execution'))
// console.log(minDistanceMemo('horse', 'ros'))
