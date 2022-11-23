//https://leetcode.com/problems/guess-number-higher-or-lower/?envType=study-plan&id=binary-search-i

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

function guessNumber(n: number, start: number = 0, end: number = n): number {
  const middle = start + Math.floor((end - start) / 2)

  if (guess(middle) === 0) return middle
  if (guess(middle) === -1) return guessNumber(n, start, (end = middle - 1))
  if (guess(middle) === 1) return guessNumber(n, (start = middle + 1), end)
}

console.log(guessNumber(10))
// console.log(guessNumber(1))
// console.log(guessNumber(2))
