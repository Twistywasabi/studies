document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("meuFormulario");
  formulario.addEventListener("submit", function (event) {
    //resetando mensagens erro
    resetarMensagensDeErro();

    if (!validarCamposObrigatorio()) {
      event.preventDefault(); // impede a submissão do formulário se hover erros (campos vazios)
    }
    //validarCamposObrigatorio();
    if (!compararValores()) {
      event.preventDefault();
    }
  });

  function validarCamposObrigatorio() {
    let camposObrigatorios = document.querySelectorAll(".obrigatorio");
    // console.log(camposObrigatorios);
    let camposValidos = true;

    for (let i = 0; camposObrigatorios.length > i; i++) {
      let campo = camposObrigatorios[i];

      if (campo.value === "" || campo.value === null) {
        exibirErro(campo, "Este campo é obrigatório");
        camposValidos = false;
      }
    }

    return camposValidos;
  }

  function compararValores() {
    const senha = document.getElementById("senha");
    const confirmarSenha = document.getElementById("confirmarSenha");

    if (senha.value !== confirmarSenha.value) {
      exibirErro(confirmarSenha, "As senhas não coincidem");
      return false;
    } else {
      return true;
    }
  }

  function exibirErro(elemento, mensagem) {
    let mensagemErro = elemento.parentElement.querySelector(".error-message");
    mensagemErro.textContent = mensagem;
    mensagemErro.style.display = "inline-block";
  }

  function resetarMensagensDeErro() {
    let mensagensErro = document.querySelectorAll(".error-message");
    for (let i = 0; i < mensagensErro.length; i++) {
      mensagensErro[i].textContent = "";
    }
  }
});
