// function allowHops(numList) {
//   const list = [...numList]
//   numList.forEach((num, index) => {
//     if (num >= 1) {
//       for (let i = 0; i < num; i++) {
//         list[index + i] = 'Hop'
//       }
//     }
//   })

//   list[numList.length - 1] = 'Hop'
//   console.log(list)

//   return list.every((num) => {
//     return num === 'Hop'
//   })
// }

// const result = allowHops([4, 3, 2, 0, 0, 0])
// console.log(result)

// function allowHopsOthman(num) {

//   let xx = true
//   let temp = num[0]

//   for (let i = 0; i <= num.length - 1; i++) {
//     console.log(temp)
//     console.log(i, num.length - 1)
//     if (i === num.length - 1) {
//       break
//     } else {
//       if (temp === 1) {
//         temp = temp + num[i]
//         temp = temp - 1
//         continue
//       } else if (temp > 1) {
//         temp = temp - 1
//       } else {
//         xx = false
//       }
//     }
//   }
//   return xx
// }
// console.log(allowHopsOthman([1, 0]))
// console.log(allowHopsOthman([2, 0, 0, 1]))
// console.log(allowHopsOthman([2, 1, 0, 1]))
// console.log(allowHopsOthman([4, 0, 0, 0, 0, 0]))
// console.log(allowHopsOthman([4, 0, 1, 0, 0, 0]))
