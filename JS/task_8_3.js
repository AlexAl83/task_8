// !задание 8.3
let str = 'Какая то фраза';
function reverseStr(str) {
  return str.split('').reverse().join('');
}
console.log(str);
console.log(reverseStr(str));
