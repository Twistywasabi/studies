document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("calc-form");
  const nomeInput = document.getElementById("nome");
  const nomeError = document.getElementById("nome-error");
  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    if (!nomeInput.value) {
      nomeError.style.display = "block";
      return;
    } else {
      nomeError.style.display = "none";
    }

    const nome = nomeInput.value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const imcCalculo = peso / (altura * altura);
    const resultadoIMC = document.getElementById("resultado");

    let categoriaIMC;

    if (imcCalculo < 18.5) {
      categoriaIMC = "Abaixo do peso";
      resultadoIMC.style.backgroundColor = "#00B9E8";
    } else if (imcCalculo <= 24.9) {
      categoriaIMC = "Peso ideal";
      resultadoIMC.style.backgroundColor = "#66FF00";
    } else if (imcCalculo <= 29.9) {
      categoriaIMC = "Acima do peso";
      resultadoIMC.style.backgroundColor = "#FFBF00";
    } else {
      categoriaIMC = "Obeso";
      resultadoIMC.style.backgroundColor = "#FF0800";
    }

    resultadoIMC.innerHTML = `<p> ${nome}, o seu IMC é ${imcCalculo.toFixed(
      2
    )}.</p><p>Você está na categoria: ${categoriaIMC}.</p>`;

    /* outra forma:
    resultadoIMC.textContent =
      nome +
      ", o resultado é: " +
      imcCalculo +
      " ( Sua categoria é: " +
      categoriaIMC +
      " )"; */

    //atualizar a categoria
    document.getElementById("categoria").value = categoriaIMC;

    let dados = new FormData(formulario);

    for (let [chave, valor] of dados.entries()) {
      console.log(chave + " : " + valor);
    }
  });
});
