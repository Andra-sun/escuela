function alterarMenu() {
  var menuMenu = document.getElementById("menuMenu");
  menuMenu.classList.toggle("oculta");
}

const menuBtn = document.querySelector('#menu-but');
const menuLista = document.querySelector('#menuMenu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  menuLista.classList.toggle('no-border-bottom');
  menuLista.style.display = menuBtn.classList.contains('active') ? 'block' : 'none';
});




