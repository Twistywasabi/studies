//Evento de submit
document.addEventListener("DOMContentLoaded", function () {
  let formulario = document.getElementById("meuFormulario");
  formulario.addEventListener("submit", function () {
    alert("Enviado com sucesso o formulário");
  });
});

//Evento de Change
let campoTexto = document.getElementById("campoTexto");
campoTexto.addEventListener("change", function () {
  console.log("Campo de texto foi alterado: " + campoTexto.value);
});

//Evento de focus
campoTexto.addEventListener("focus", function () {
  console.log("campo de texto focado");
});

//Evento de blur
campoTexto.addEventListener("blur", function () {
  console.log("Campo de texto desfocado");
});
