//https://leetcode.com/problems/minimum-window-substring/
//Hard

//Time Limit Exceeded
function minWindow(s: string, t: string): string {
  // return minWindowIterative(s,t)
  return minWindowPointers(s, t)
}

function minWindowIterative(s: string, t: string): string {
  let result = ''
  const lenS = s.length

  for (let i = 0; i <= lenS - t.length; i++) {
    const letter = s[i]
    if (t.includes(letter)) {
      const split = s.substring(i, lenS)
      const findWindow = findSub(split, t)
      if (result === '') result = findWindow
      else if (findWindow.length === t.length) return findWindow
      else if (findWindow !== '' && findWindow.length < result.length) {
        result = findWindow
      }
    }
  }

  function findSub(window: string, t: string): string {
    const tArr = t.split('')
    for (let i = 0; i < window.length; i++) {
      const letter = window[i]
      if (tArr.length === 0) return window.substring(0, i)

      if (tArr.includes(letter)) {
        const letterIndex = tArr.indexOf(letter)
        tArr.splice(letterIndex, 1)
      }
    }

    return tArr.length === 0 ? window.substring(0, window.length) : ''
  }

  return result
}

function minWindowPointers(s: string, t: string): string {
  if (s === t) return t
  const sLen = s.length
  const tLen = t.length

  let right = 0
  let left = 0

  let result = ''
  let tArr = t.split('')

  while (left <= sLen - tLen) {
    const letterR = s[right]
    const letterL = s[left]

    if (tArr.length === 0) {
      if (result === '') result = s.substring(left, right)
      if (t.length === result.length) return result
      const currentSubStringLen = s.substring(left, right).length
      console.log(currentSubStringLen)
      if (result.length < currentSubStringLen) left++
      else {
        result = s.substring(left, right)
        left++
      }
      if (t.includes(letterL)) tArr.push(letterL)
    }

    if (right <= sLen) {
      removeLetter(tArr, letterR)
      if (!t.includes(letterL)) left++
      right++
    } else {
      removeLetter(tArr, letterL)
      left++
    }
  }
  return result
}

// Remove an element from the desired window
function removeLetter(tArr: string[], letter: string): void {
  const index = tArr.indexOf(letter)
  if (tArr.includes(letter)) {
    tArr.splice(index, 1)
  }
}

console.log(minWindow('ADOBECODEBANC', 'ABC'))
console.log(minWindow('abc', 'b'))
console.log(minWindow('abc', 'bc'))
console.log(minWindow('abc', 'ac'))
console.log(minWindow('bdab', 'ab'))
// console.log(minWindow('a', 'a'))
// console.log(minWindow('a', 'aa'))
// console.log(minWindow('aa', 'aa'))
