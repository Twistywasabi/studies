let meuElemento = document.getElementById("meuElemento");

function tornarCirculo() {
  meuElemento.classList.add("circle");
  meuElemento.classList.remove("square");
}

function tornarQuadrado() {
  meuElemento.classList.add("square");
  meuElemento.classList.remove("circle");
}

function alterarFormato() {
  meuElemento.classList.toggle("circle");
  meuElemento.classList.toggle("square");
}

function verificarClasse() {
  if (meuElemento.classList.contains("circle")) {
    console.log("O elemento é círculo");
  } else {
    console.log("O elemento é quadrado");
  }
}
