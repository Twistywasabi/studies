//onmouseover="this.style.color = 'red';"
//onmouseout="this.style.color = 'black';"

function mudarCor(elemento, cor) {
  elemento.style.color = cor;
}

/* onclick="alert('Botão clicado!') */

function clicarBotao() {
  alert("Botão clicado de novo !");
}

/* onfocus="this.value = 'Campo em foco';"
onblur="this.value = '';" */

function campoEmFoco(elemento) {
  elemento.value = "Campo em foco";
}
function foraEmFoco(elemento) {
  elemento.value = "";
}

/* onmouseover="this.src='imagem2.png';"
onmouseout="this.src='imagem1.png';" */

function mudarImagem(imagem) {
  imagem.src = "imagem2.png";
}

function mudarImagem2(imagem) {
  imagem.src = "imagem1.png";
}

function mudarImagemFacil(imagem, novoSrc) {
  imagem.src = novoSrc;
}
