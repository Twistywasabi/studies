const faturamento = [
  150_000, 110_000, 90_000, 70_000, 100_000, 120_000, 130_000, 95_000, 120_000,
  130_000, 120_000, 165_000,
];

console.log(faturamento.length);

//Métodos imutáveis
//Método map

const faturamentoEmReais = faturamento.map(
  (valorFaturamentoMensal) => 4.79 * valorFaturamentoMensal
);

console.log(faturamentoEmReais);

//Método filtes
const faturamentoMaior130Mil = faturamento.filter(
  (valorFaturamentoMensal) => valorFaturamentoMensal >= 130_000
);

console.log(faturamentoMaior130Mil);

//Método reduce

/* let faturamentoAnual = 0;

for (let i = 0; i < faturamento.length; i++) {
  faturamentoAnual += faturamento[i];
}

console.log(`Faturamento anual: ${faturamentoAnual}`);

console.log(
  `O faturamento anual foi de ${faturamentoAnual / faturamento.length} `
);
 */

const faturamentoAnual = faturamento.reduce(
  (acumulador, elementoAtual) => acumulador + elementoAtual,
  0
);

console.log(`Faturamento anual: ${faturamentoAnual}`);

console.log(
  `O faturamento anual foi de ${faturamentoAnual / faturamento.length} `
);
