let age = 1;

function hello(sayi) {
  console.log("hello!");
  console.log("Your age " + sayi);
  return sayi + 1;
}

age = hello(age);
console.log(age);

const hello2 = function (sayi) {
  console.log("hello!");
  console.log("Your age " + sayi);
  return sayi + 1;
};

const hello3 = (age) => {
  return age + 1;
};
