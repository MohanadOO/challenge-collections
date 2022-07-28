//https://leetcode.com/problems/first-bad-version/
//Easy

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

var solution = function (isBadVersion) {
  return function (n) {
    let start = 0
    let end = n
    while (start <= end) {
      let middle = Math.floor((start + end + 1) / 2)
      if (isBadVersion(middle)) end = middle - 1
      else start = middle + 1
    }
    return start
  }
}
