//https://leetcode.com/problems/string-compression

function compress(chars: string[]): number {
  let i = 0
  let res = 0

  while (i < chars.length) {
    let groupLen = 1

    while (i + groupLen < chars.length && chars[i + groupLen] === chars[i]) {
      groupLen++
    }

    chars[res++] = chars[i]
    if (groupLen > 1) {
      for (const c of groupLen.toString().split('')) {
        chars[res++] = c
      }
    }
    i += groupLen
  }
  return res
}

console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']))
console.log(compress(['a']))
console.log(
  compress(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'])
)
