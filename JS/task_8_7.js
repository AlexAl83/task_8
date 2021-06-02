// !задание 8.7
let arr = [0, 5, 10, 15, 20, 25, null, 'Gfif', 30, 35, 38.5, 40, 45, 50];
arrEven = 0;
arrOdd = 0;
arrOther = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0 || typeof arr[i] != 'number') {
    arrOther++;
  } else {
    if (arr[i] % 2 === 0) {
      arrEven++;
    } else if (arr[i] % 2 !== 0) {
      arrOdd++;
    }
  }
}
console.log('Количество четных: ' + arrEven);
console.log('Количество нечетных: ' + arrOdd);
console.log('Количество прочих: ' + arrOther);
