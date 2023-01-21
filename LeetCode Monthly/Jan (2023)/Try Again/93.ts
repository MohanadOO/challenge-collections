//https://leetcode.com/problems/restore-ip-addresses

//Solution => https://leetcode.com/problems/restore-ip-addresses/solutions/672543/javascript-the-most-clean-backtracking-solution/?orderBy=most_votes&languageTags=javascript
function restoreIpAddresses(s: string): string[] {
  const len = s.length
  if (len > 12) return []
  if (len < 4) return []
  if (len === 4) return [s.split('').join('.')]

  const res: string[][] = []
  restore([], s)

  return res.map((x) => x.join('.'))

  function restore(arr: string[], str: string) {
    if (arr.length === 3) {
      if (valid(str)) res.push([...arr, str])
      return
    }

    for (let i = 1; i < 4; i++) {
      let subStr = str.slice(0, i)
      console.log(subStr)
      if (!valid(subStr)) continue
      restore([...arr, subStr], str.slice(i))
    }
  }

  function valid(str: string): boolean {
    if (+str > 255 || !str.length) return false
    if (str.length >= 2 && str[0] === '0') return false
    return true
  }
}

console.log(restoreIpAddresses('25525511135'))
// console.log(restoreIpAddresses('0000'))
// console.log(restoreIpAddresses('123456'))
