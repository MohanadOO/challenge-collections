// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

function likes(names) {
  const length = names.length

  return length === 0
    ? 'no one likes this'
    : length === 1
    ? `${names[0]} likes this`
    : length === 2
    ? `${names[0]} and ${names[1]} like this`
    : length === 3
    ? `${names[0]}, ${names[1]} and ${names[2]} like this`
    : `${names[0]}, ${names[1]} and ${length - 2} others like this`
}

console.log(likes(['Tate', 'Mark', 'Ali', 'Mohanad', 'Othman']))
