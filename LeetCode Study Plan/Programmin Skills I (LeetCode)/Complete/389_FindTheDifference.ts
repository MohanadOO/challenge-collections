//https://leetcode.com/problems/find-the-difference/
//Easy

function findTheDifference(s: string, t: string): string {
  const sort1 = s.split('').sort()
  const sort2 = t.split('').sort()

  for (let i = 0; i < sort2.length; i++) {
    if (sort1[i] !== sort2[i]) {
      return sort2[i]
    }
  }
  return sort2[0]
}

console.log(findTheDifference('abcd', 'abcde'))
