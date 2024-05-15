//Seu JavaScript de validação aqui
var texto = "Wesley Gatinho";
var atraso = 200;
var textoElemento = document.querySelector(".title__bio");


var contadorDeLetras = 0;
function escreverTexto() {
  if (contadorDeLetras < texto.length) {
    textoElemento.textContent += texto.charAt(contadorDeLetras);
    contadorDeLetras++;
    setTimeout(escreverTexto, atraso);
  }
}

escreverTexto();


function animar()  {
  const btn = document.getElementById('btn-menu');
  btn.classList.toggle('ativar');

}

const btnMenu = document.getElementById('btn-menu');
const menuList = document.querySelector('.menu__list');
let btnClicado = false;

btnMenu.addEventListener('click', function(){
  btnClicado ? menuList.classList.add('invisivel') : menuList.classList.remove('invisivel')
  btnClicado = !btnClicado;
});