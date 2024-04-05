function criarElementoInnerText() {
  const ul = document.getElementById("lista-de-elementos");

  const novaLi = document.createElement("li");

  novaLi.innerText = "Novo input com innerText";

  const novoInput = document.createElement("input");
  console.log("Adicionando novos inputs e lis");

  novaLi.appendChild(novoInput);

  ul.appendChild(novaLi);
}

function criarElementoInnerHtml() {
  const ul = document.getElementById("lista-de-elementos");
  const novaLi = document.createElement("li");

  console.log("Adicionando novo elemento ao clicar");

  novaLi.innerHTML = "<p>Criei um novo parágrafo</p>";
  ul.appendChild(novaLi);
}

function criarElementoTextContent() {
  const ul = document.getElementById("lista-de-elementos");
  const novaLi = document.createElement("li");
  const novoInput = document.createElement("input");

  novaLi.textContent = "Atribuindo conteúdo TextContent";
  novaLi.appendChild(novoInput);
  ul.appendChild(novaLi);
}

//innertext
//textcontent
//innerhtml
