const titulo = document.getElementsByTagName("H2");

console.log("Selecionando pela Tag h2: ", titulo);

const paragrafosItens = document.getElementsByClassName("texto-lista");
console.log("Selecionando por nome da classe: ", paragrafosItens);

const destacado = document.getElementById("destacado");
console.log("Selecionando por ID: ", destacado);

const destacadoSelector = document.querySelector("#destacado");
console.log("Selecionando ID por seletor css", destacadoSelector);

const todosPItens = document.querySelectorAll(".texto-lista");
console.log("Selecionando múltiplos elementos por seletor CSS: ", todosPItens);

const inputName = document.getElementsByName("username");
console.log("Selecionando por atributo name (username): ", inputName);

const todosElementos = document.querySelectorAll("*");
console.log("Selecionando TODOS elementos", todosElementos);
