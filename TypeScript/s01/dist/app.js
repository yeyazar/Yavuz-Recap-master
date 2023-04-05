// console.log('Hello World')
const button = document.getElementById('submit');
const a = document.getElementById('input1');
const b = document.getElementById('input2');
const result = document.getElementById('result');
let x = '5';
x = 'ww';
//x = false
//error handled
function add(a, b) {
    return a + b;
}
button.addEventListener('click', () => {
    console.log('clicked');
    result.innerText = `${add(+a.value, +b.value)}`;
});
let addArrow = (a, b) => a * b;
let xyz = 5;
let aa;
aa = '5';
aa = 5;
aa = false;
let ab = '5';
