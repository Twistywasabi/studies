function validarFormulario() {
  // Obter o valor do campo de texto
  const campoTexto = document.getElementById("campoTexto");
  let valorCampo = campoTexto.value;
  // verificar se o campo está vazio ou não
  if (valorCampo === "") {
    alert("Por favor, preencha o campo de texto");
    return false; //impede a submissão
  } else {
    return true;
  } //Permite a submissão
}
