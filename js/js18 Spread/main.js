// ...

const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

const newArray = [...array1, ...array2];

const newArray2 = [array1, array2];

console.log(newArray);
console.log(newArray2);

const newArray3 = [...array1];
console.log(newArray3);

const newArray4 = [..."mehmet"];
console.log(newArray4);

const [firstIndex, ...rest] = array1;
console.log(firstIndex);
console.log(rest);

function test(name, surname, ...rest) {
  console.log(name, surname, rest);
}

test(5, 61, 2, 4, 5123, 321, 41);
