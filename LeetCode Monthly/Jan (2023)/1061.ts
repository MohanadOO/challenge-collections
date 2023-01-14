//https://leetcode.com/problems/lexicographically-smallest-equivalent-string/

function smallestEquivalentString(
  s1: string,
  s2: string,
  baseStr: string
): string {
  //   return smallestEquivalentString1(s1, s2, baseStr)
  return smallestEquivalentStringUnionFind(s1, s2, baseStr)
}

function smallestEquivalentString1(
  s1: string,
  s2: string,
  baseStr: string
): string {
  let result = ''

  const arr: string[][] = []
  let string = ''

  for (let i = 0; i < s1.length; i++) {
    if (string.includes(s1[i])) {
      const index = arr.findIndex((str: any) =>
        str.join('').includes(s1[i] || s2[i])
      )
      arr[index].push(s2[i])
      string += s2[i]
    } else if (string.includes(s2[i])) {
      const index = arr.findIndex((str: any) =>
        str.join('').includes(s2[i] || s1[i])
      )
      arr[index].push(s1[i])
      string += s2[i]
    } else if (!string.includes(s1[i]) && !string.includes(s2[i])) {
      if (s1[i] === s2[i]) arr.push([s1[i]])
      else arr.push([s1[i], s2[i]])
      string += s1[i] + s2[i]
    }
  }

  const sort: string[] = arr.map((str: any) => str.sort().join(''))
  console.log(sort)
  for (let i = 0; i < baseStr.length; i++) {
    const index = sort.findIndex((str) => str.includes(baseStr[i]))
    if (index === -1) result += baseStr[i]
    else result += sort[index][0]
  }

  return result
}

//Solution =>  https://leetcode.com/problems/lexicographically-smallest-equivalent-string/solutions/3048217/javascript-62ms-100-fast-very-very-easy-to-understand-with-video-explanation/
function smallestEquivalentStringUnionFind(
  s1: string,
  s2: string,
  baseStr: string
): string {
  let arr = new Array(26).fill(0)
  let charCodeAtA = 97

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] = String.fromCharCode(i + charCodeAtA)
  }

  for (let i = 0; i < s1.length; i++) {
    let u = arr[s1[i].charCodeAt(0) - charCodeAtA]
    let v = arr[s2[i].charCodeAt(0) - charCodeAtA]

    if (u === v) continue
    let replaceTo = ''
    let replaceFrom = ''
    if (u > v) {
      replaceTo = v
      replaceFrom = u
    } else {
      replaceTo = u
      replaceFrom = v
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === replaceFrom) arr[i] = replaceTo
    }
  }

  let result = ''
  for (let i = 0; i < baseStr.length; i++) {
    result += arr[baseStr.charCodeAt(i) - charCodeAtA]
  }
  return result
}

// function find(u: number, arr: number[]) {
//   return arr[u] === u ? u : find(arr[u], arr)
// }

console.log(smallestEquivalentString('parker', 'morris', 'parser'))
console.log(smallestEquivalentString('hello', 'world', 'hold'))
console.log(smallestEquivalentString('leetcode', 'programs', 'sourcecode'))
// console.log(
//   smallestEquivalentString(
//     'gicimlheddadmbmhiimakmhgklliljllfgjegamichefljcdef',
//     'jgjbjkhkliegkfdcbfcdgmeadlkgcdfkcjdmmcgliegijgjimj',
//     'lqppdcmgachdannbaeztqoqfpimyzcdqksykgwymceogkgruey'
//   )
// )
