//https://coderhub.sa/challenges/9d62db84-0b4e-4562-8027-9667472b1280/view?language=JavaScript

function most_frequent_element(arr) {
  // write your code here
  const obj = {}
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i]
    if (!obj[curr]) obj[curr] = 1
    else obj[curr]++
  }
  const sort = Object.entries(obj).sort((a, z) => z[1] - a[1])[0][0]
  return Number(sort)
}

console.log(most_frequent_element([1, 2, 3, 4, 1, 5, -5, -5, -5, -5, -5, 6]))
console.log(most_frequent_element([13, 2, 1, 2, 10, 2, 1, 1, 2, 2]))
