document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("calc-form");
  const nomeFormulario = document.getElementById("name");
  const nomeFormularioSpan = document.getElementById("span");
  const pesoFormulario = document.getElementById("weight");
  const alturaFormulario = document.getElementById("height");
  const resultadoIMC = document.getElementById("resultado");
  formulario.addEventListener("submit", function (evento) {
    if (nomeFormulario.value === "") {
      nomeFormularioSpan.textContent =
        "Por favor, preencha o seu nome corretamente";
    } else {
      nomeFormularioSpan.textContent = "";
    }

    peso = pesoFormulario.value;
    altura = alturaFormulario.value;
    const imcCalculo = peso / (altura * altura);
    let categoriaIMC = "Abaixo do peso";

    if (imcCalculo < 18.5) {
      resultadoIMC.style.backgroundColor = "#00B9E8";
    } else if (imcCalculo > 18.5 && imcCalculo <= 24.9) {
      categoriaIMC = "Peso ideal";
      resultadoIMC.style.backgroundColor = "#66FF00";
    } else if (imcCalculo > 24.9 && imcCalculo <= 29.9) {
      categoriaIMC = "Acima do peso";
      resultadoIMC.style.backgroundColor = "#FFBF00";
    } else {
      categoriaIMC = "Obeso";
      resultadoIMC.style.backgroundColor = "#FF0800";
    }

    resultadoIMC.textContent =
      nomeFormulario.value +
      ", o resultado é: " +
      imcCalculo +
      " ( Sua categoria é: " +
      categoriaIMC +
      " )";

    /*     console.log(nomeFormulario.value);
    console.log(altura);
    console.log(peso);
    console.log(imcCalculo);
    console.log(categoriaIMC); */

    let dados = new FormData(formulario);

    for (let [chave, valor] of dados.entries()) {
      console.log(chave + ":" + valor);
    }
  });
});
