
// <!-- Menu Hambuguer - Tela Mobile  -->
function animar()  {
  const btn = document.getElementById('btn-menu');
  btn.classList.toggle('ativar');

}


// <!-- Esconder e Ativar Menu - Tela Mobile  -->
const btnMenu = document.getElementById('btn-menu');
const menuList = document.querySelector('.menu__list');

let btnClicado = false;
if(btnClicado){
  alert('clicado');
}
btnMenu.addEventListener('click', () =>{
  btnClicado ? menuList.classList.add('invisivel') : menuList.classList.remove('invisivel');
  btnClicado = !btnClicado;
  
});
