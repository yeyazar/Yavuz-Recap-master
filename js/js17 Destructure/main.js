const user = {
  name: "Mehmet",
  age: 25,
  isTest: false,
  skills: ["html", "css"],
  school: {
    name: "ask",
    sinif: 3,
  },
};

const{name, age , ...rest}= user
console.log(rest);


const { school:{sinif} } = user;
//const age = user.age;

console.log(sinif);


const skills=["html", "css", "js", "python"]

const [firstSkill, secondSkill, thirdSkill, ...rest2] = skills;

console.log(firstSkill, thirdSkill, rest2);
