function writeUserMessageOnConsole(message) {
  console.log(message);
}

writeUserMessageOnConsole('Escreva esse argumento no console');

const writeUserMessageVariableVersion = function (message) {
  console.log(message);
};

writeUserMessageVariableVersion(
  'Escreva esse argumento no console - Versão variável'
);

const writeUserMessageArrowVersion = (message) => {
  console.log(message);
};

writeUserMessageArrowVersion(
  'Escreva esse argumento no console - Versão Flecha ~ (arrow function)'
);

const variavelQueAbrigaArrowFunction = () => {
  console.log('essa é uma função!');
};

variavelQueAbrigaArrowFunction();
