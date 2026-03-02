let count = 0;
let countEl = document.getElementById("count-el");
//esta es la variable para la funcion de guardado 
let saveEl = document.getElementById("save-el");

function increment() {
  count += 1;
  console.log(count);
  countEl.textContent = count;
}
function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}