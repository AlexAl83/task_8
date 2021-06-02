// !задание 8.6
let arr = [4, 4, 4, 4, 4];
function checkUnique(arr) {
  for (let i = 0; i < arr.length; i++) {
    let toCheck = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (toCheck != arr[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(checkUnique(arr));
