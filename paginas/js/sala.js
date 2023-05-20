function exibir3d() {
  ocultarSala();
  fetch('txt/segd.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById("mensagem1a").innerText = data;
  })
  fetch('txt/terd.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById("mensagem1b").innerText = data;
    }) 
  fetch('txt/quad.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById("mensagem1c").innerText = data;
    })   
  fetch('txt/quid.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById("mensagem1d").innerText = data;
    })    
  fetch('txt/sed.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById("mensagem1e").innerText = data;
    })  
  document.getElementById("sala-but").innerText = "3ºD";
}

function exibir3b() {
  ocultarSala();
  fetch('txt/segb.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById("mensagem2a").innerText = data;
  })
  fetch('txt/terb.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById("mensagem2b").innerText = data;
    }) 
  fetch('txt/quab.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById("mensagem2c").innerText = data;
    })   
  fetch('txt/quib.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById("mensagem2d").innerText = data;
    })    
  fetch('txt/seb.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById("mensagem2e").innerText = data;
    }) 
  document.getElementById("sala-but").innerText = "3ºB";
}


function alternarSala() {
  var salaMenu = document.getElementById("salaMenu");
  salaMenu.classList.toggle("oculta");

  var titulo = document.getElementById("titulo");
  titulo.classList.toggle("aberto");

  var menu1 = document.getElementById("salaMenu");
  menu1.classList.toggle("aberto");
}



function ocultarSala() {
  // Ocultar sala 3ºD
  document.getElementById("mensagem1a").innerText = "";
  document.getElementById("mensagem1b").innerText = "";
  document.getElementById("mensagem1c").innerText = "";
  document.getElementById("mensagem1d").innerText = "";
  document.getElementById("mensagem1e").innerText = "";

  // Ocultar sala 3ºB
  document.getElementById("mensagem2a").innerText = "";
  document.getElementById("mensagem2b").innerText = "";
  document.getElementById("mensagem2c").innerText = "";
  document.getElementById("mensagem2d").innerText = "";
  document.getElementById("mensagem2e").innerText = "";
}



