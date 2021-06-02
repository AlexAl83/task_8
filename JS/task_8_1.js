// !задание 8.1
let value = prompt('Введите любое значение');
typeof value;
value = +value;
if (!Number.isNaN(value)) {
  if (typeof value == 'number') {
    if (value % 2 === 0) {
      console.log('Число четное');
    } else {
      console.log('Число нечетное');
    }
  }
} else {
  console.log('Упс, кажется, вы ошиблись');
}
console.log(value);
