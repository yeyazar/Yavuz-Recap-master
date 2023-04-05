// console.log('Hello World')

const button = document.getElementById('submit')!;
const a = document.getElementById('input1') as HTMLInputElement;
const b = document.getElementById('input2') as HTMLInputElement;
const result = document.getElementById('result')!;

let x = '5'
x = 'ww'
//x = false
//error handled

function add(a: number, b: number) {
    return a + b;
}
button.addEventListener('click', () => {
    console.log('clicked')
    result.innerText = `${add(+a.value, +b.value)}`;
});

let addArrow = (a:number, b:number)=> a*b;

let xyz : number =  5

let aa;

aa = '5'
aa = 5
aa = false

let ab = '5'