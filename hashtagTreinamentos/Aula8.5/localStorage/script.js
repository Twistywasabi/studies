document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario");
  const limparBotao = document.getElementById("limpar");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // capturar dados do nosso formulário
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;

    //verificar se os campos estão preenchidos
    if (nome && idade) {
      //salvo no local storage
      localStorage.setItem("nome", nome);
      localStorage.setItem("idade", idade);

      //limpar campos do formulario
      document.getElementById("nome").value = "";
      document.getElementById("idade").value = "";
      alert("Dados salvos com sucesso");
    } else {
      alert("por favor preencha todos os campos");
    }
  });

  limparBotao.addEventListener("click", function () {
    //limpar local storage
    localStorage.removeItem("nome");
    localStorage.removeItem("idade");
    texto.textContent = "";
    alert("Dados foram removidos do localStorage");
  });

  //getItem -  acessar nossos dados do local storage

  const carregarBtn = document.getElementById("carregar");
  const texto = document.getElementById("texto");

  carregarBtn.addEventListener("click", function () {
    const dadoNome = localStorage.getItem("nome");
    const dadoIdade = localStorage.getItem("idade");
    texto.textContent = `O nome do usuário é ${dadoNome} e a sua idade é ${dadoIdade}`;
  });
});
