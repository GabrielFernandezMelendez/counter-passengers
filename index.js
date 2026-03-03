let contador = 0;
let contadorTexto = document.getElementById("count-el");
//esta es la variable para la funcion de guardado 
let Guardado = document.getElementById("save-el");

function increment() {
  contador += 1;
  console.log("el contador tiene el valor de:"+contador);
  contadorTexto.textContent = contador;
}
function save() {
  let guardado = contador + " - ";
  Guardado.textContent += guardado;
  contadorTexto.textContent = 0;
  contador = 0;
}