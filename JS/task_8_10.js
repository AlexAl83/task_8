// !задание 8.10
let num = prompt('Введите любое число от 2 до 1000');
function isPrime(num) {
  for (let i = 2; i <= num; i++)
    if (num <= 1000) {
      if (num % i === 0) {
        return 'число не является простым';
      } else if (num > 1) {
        return 'число простое';
      }
    } else {
      return 'данные неверны';
    }
}
console.log(isPrime(num));
