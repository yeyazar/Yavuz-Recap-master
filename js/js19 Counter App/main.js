// butonlari al
// butonlari tiklanmis mi dinle
// tiklanirsa arttir ya da azalt
//    // title'i bul ve arttir/azalt
const incButton = document.querySelector(".arttir");
const decButton = document.querySelector(".azalt");
const number = document.querySelector("#numara");

let initialNumber = 0;

incButton.addEventListener("click", (event) => {
  initialNumber++;
  number.innerHTML = `<i>${initialNumber}</i>`
  
});

decButton.addEventListener("click", ()=> {
  initialNumber--;
  number.innerHTML= `<i>${initialNumber}</i>`
})