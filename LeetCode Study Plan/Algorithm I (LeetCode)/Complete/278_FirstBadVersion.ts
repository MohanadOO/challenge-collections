//https://leetcode.com/problems/first-bad-version/
//Easy

/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

function solution(isBadVersion: any) {
  return (n: number): number => {
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
