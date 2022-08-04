//https://leetcode.com/problems/goal-parser-interpretation/
//Easy

function interpret(command: string): string {
  return interpret1(command)
  return interpret2(command)
}

function interpret1(command: string): string {
  let goalParser = ''
  command.replace('G', 'G')
  command.replace('()', 'o')

  for (let i = 0; i < command.length; ) {
    if (command[i] === 'G') {
      goalParser += 'G'
      i++
    } else if (command[i] === '(' && command[i + 1] === ')') {
      goalParser += 'o'
      i = i + 2
    } else {
      goalParser += 'al'
      i = i + 4
    }
  }
  return goalParser
}

function interpret2(command: string): string {
  return command.split('()').join('o').split('(al)').join('al')
}

console.log(interpret('G()(al)'))
console.log(interpret('G()()()(al)'))
