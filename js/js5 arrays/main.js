const isimler = ["mehmet", "ahmet", "mustafa"];

console.log(isimler);

isimler.push("murat");
console.log(isimler);

const sonEleman = isimler.pop();
console.log(isimler, sonEleman);

const result = isimler.splice(0, 2);
console.log(isimler);
console.log(result);

const isimler2 = ["mehmet", "ahmet", "mustafa", "murat"];
const result2 = isimler2.slice(1,3)

console.log(isimler2);
console.log(result2);

const result3 = isimler2.join(" ")
console.log(result3);

console.log(isimler2.indexOf("ahmet"));

console.log(isimler2.reverse());
console.log(isimler2);

console.log(isimler2.shift());
console.log(isimler2);