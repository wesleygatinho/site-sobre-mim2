// <!-- Escrever nome  -->
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