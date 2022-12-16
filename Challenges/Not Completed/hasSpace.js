//https://coderhub.sa/challenges/a705e065-6874-4024-971e-8e2695b001e1/view?language=JavaScript

function hasSpace(strParam) {
  return strParam.replaceAll(' ', '#')
}

console.log(hasSpace('Saudia Arabia'))
console.log(hasSpace('What do you do?'))
