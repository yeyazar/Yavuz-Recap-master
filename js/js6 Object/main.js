//Object
// freeze - hasOwnProperty - keys - values - entries

const user = {
  name1: "ahmet",
  age: 24,
  skills: ["HTML", "CSS", "Javascript"],
  isSomething: false,
  family: [{ name1: "mustafa", surname: "mussur" }, "kadir"],
};

console.log(user.name1);

let intendedKey = "skills";
intendedKey = "age";
console.log(user[intendedKey]);

user.surname = "akacan";
//user.["surname"]="akacan;"
console.log(user);

console.log(user.family[0].name1);

Object.freeze(user);

user.test = "asdadsa";
console.log(user);

console.log(user.hasOwnProperty("name1"));

console.log(Object.keys(user));

console.log(Object.values(user));

console.log(Object.entries(user));
