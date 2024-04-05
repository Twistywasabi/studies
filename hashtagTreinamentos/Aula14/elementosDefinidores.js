/* function writeMessageOnConsoleAndReturnTwo(message) {
  console.log(message);
  return 2;
} */

//Palavra chave function X
// nome da função X
//parenteses - parametross <=
//blocos de chaves com instruções dentro <
// instruções de retorno V

const variableTahtStoresFunction = function (message) {
  console.log(message);
  return undefined;
};

const variableTahtStoresFunction2 = function (message) {
  console.log(message);
};

console.log(variableTahtStoresFunction("teste1"));

console.log(variableTahtStoresFunction2("teste2"));

const writeMessageOnConsoleAndReturnTwo = (message) => {
  console.log(message);
  return 2;
};

function squareNumber(originalNumber) {
  return originalNumber * originalNumber;
}

const squareNumberArrow = (originalNumber) => originalNumber * originalNumber;

console.log(squareNumber(2));
console.log(squareNumberArrow(2));

const arrowFunctionQueRetornaObjeto = () => {
  return { id: 0, nome: "Daniel porto" };
};

console.log(arrowFunctionQueRetornaObjeto());
