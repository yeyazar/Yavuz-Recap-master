const users = [
  { id: 0, name: "ahmet", age: 25 },
  { id: 1, name: "mehmet", age: 26 },
  { id: 3, name: "dervis", age: 26 },
];

const findAges = (user) => user.age == 26;

//const test = users.find((user) => user.age == 26);

const test = users.find(findAges);

console.log(test);

