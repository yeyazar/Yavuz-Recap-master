const users = [
  { id: 0, name: "ahmet", age: 25 },
  { id: 1, name: "mehmet", age: 15 },
  { id: 3, name: "dervis", age: 35 },
  { id: 4, name: "adervis", age: 25 },
];

const kirktanKucukler = [];

const test = users.map((asd, index, array) => {
  if (asd.age < 30) {
    return asd;
  } else {
    return "bigger than 30";
  }

  //return
});

console.log(test);

// users.forEach((asd, index, array) => {
//   if (asd.age < 30) {
//     kirktanKucukler.push(asd.name);
//   } else {
//     console.log(asd.name);
//   }
// });

console.log(kirktanKucukler);
