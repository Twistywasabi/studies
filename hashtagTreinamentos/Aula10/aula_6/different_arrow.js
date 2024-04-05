const myLoggingFunction = (message) => {
  console.log(message);
  console.log('Segunda instrução da minha arrow function');
};

// const myNormalLoggingFunction = function (message) {
//   console.log(message);
// };

// myLoggingFunction('Teste da primeira arrow function do arquivo');

// myNormalLoggingFunction(
//   'Teste da minha função normal armazenada numa variável'
// );

//prettier-ignore
const myLoggingFunctionWithOnlyOneParameter = message => {
  console.log(message);
};

//prettier-ignore
const myLoggingFunctionWithOnlyOneInstruction = (message, message2) => console.log(message + message2);

// myLoggingFunctionWithOnlyOneParameter(
//   'chamada de função da minha arrow function sem parênteses'
// );

myLoggingFunctionWithOnlyOneInstruction(
  'Teste da função: ',
  'bora ver se deu certo'
);
