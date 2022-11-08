//https://www.codewars.com/kata/58539230879867a8cd00011c/train/javascript
// 6 KYU

function findChildren(dancingBrigade) {
  const letters = {}
  return dancingBrigade
    .toLowerCase()
    .split('')
    .sort()
    .map((letter) => {
      if (!letters[letter]) {
        letters[letter] = letter
        return letter.toUpperCase()
      }
      return letter
    })
    .join('')
}

console.log(findChildren('beeeEBb'))
