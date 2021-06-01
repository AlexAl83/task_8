//* для проверки заданий необходимо раскомментировать необходимое

// !задание 8.1
// let value = prompt('Введите любое значение');
// typeof value;
// value = +value;
// if (!Number.isNaN(value)) {
//   if (typeof value == 'number') {
//     if (value % 2 === 0) {
//       console.log('Число четное');
//     } else {
//       console.log('Число нечетное');
//     }
//   }
// } else {
//   console.log('Упс, кажется, вы ошиблись');
// }
// console.log(value);

// !задание 8.2

// let x = 10 > 15;
// typeof x;
// if (typeof x == 'number') {
//   console.log('X — число');
// } else if (typeof x == 'string') {
//   console.log('Тип x не определён');
// } else {
//   console.log('Тип x не определён');
// }

// !задание 8.3
// let str = 'Какая то фраза';
// function reverseStr(str) {
//   return str.split('').reverse().join('');
// }
// console.log(str);
// console.log(reverseStr(str));

// !задание 8.4
// min = 0;
// max = 100;
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
// }

// console.log(getRandomIntInclusive(min, max));

// !задание 8.5
// let arr = [23, 34, 45, 56];

// console.log(`Количество элементов массива: ${arr.length}`);

// arr.forEach(function (item, index, array) {
//   console.log(item);
// });

// !задание 8.6
// let arr = [4, 4, 4, 4, 4];
// function checkUnique(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let toCheck = arr[i];
//     for (let j = 0; j < arr.length; j++) {
//       if (toCheck != arr[j]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// console.log(checkUnique(arr));

// !задание 8.7
// let arr = [0, 5, 10, 15, 20, 25, null, 'Gfif', 30, 35, 38.5, 40, 45, 50];
// arrEven = 0;
// arrOdd = 0;
// arrOther = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 0 || typeof arr[i] != 'number') {
//     arrOther++;
//   } else {
//     if (arr[i] % 2 === 0) {
//       arrEven++;
//     } else if (arr[i] % 2 !== 0) {
//       arrOdd++;
//     }
//   }
// }
// console.log('Количество четных: ' + arrEven);
// console.log('Количество нечетных: ' + arrOdd);
// console.log('Количество прочих: ' + arrOther);

// !задание 8.8
// let arr = new Map([
//   ['key1', 'value1'],
//   ['key2', 'value2'],
//   ['key3', 'value3'],
// ]);

// for (let pair of arr.entries()) {
//   console.log(`Ключ = ${pair[0]}, значение = ${pair[1]}`);
// }
// !задание 8.9
// let arr = [0, 5, 10, 15, 20, 25, null, 'Gfif', 30, 35, 38.5, 40, 45, 50];
// arrEven = 0;
// arrOdd = 0;
// arrOther = 0;
// function calcValue(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0 || typeof arr[i] != 'number') {
//       arrOther++;
//     } else {
//       if (arr[i] % 2 === 0) {
//         arrEven++;
//       } else if (arr[i] % 2 !== 0) {
//         arrOdd++;
//       }
//     }
//   }
//   console.log('Количество четных: ' + arrEven);
//   console.log('Количество нечетных: ' + arrOdd);
//   console.log('Количество прочих: ' + arrOther);
// }
// calcValue(arr);

// !задание 8.10
// let num = prompt('Введите любое число от 2 до 1000');
// function isPrime(num) {
//   for (let i = 2; i <= num; i++)
//     if (num <= 1000) {
//       if (num % i === 0) {
//         return 'число не является простым';
//       } else if (num > 1) {
//         return 'число простое';
//       }
//     } else {
//       return 'данные неверны';
//     }
// }
// console.log(isPrime(num));
