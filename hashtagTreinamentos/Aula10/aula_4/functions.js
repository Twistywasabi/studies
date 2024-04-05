// setTimeout(function () {
//   writeThisMessageOnConsole('Escreva essa minha mensagem aqui!');
// }, 2000);

function writeThisMessageOnConsole(message) {
  console.log(message);
}

const resultFunction = function () {
  writeThisMessageOnConsole('Escreva essa minha mensagem aqui!');
};

// const result = writeThisMessageOnConsole('parametro');
// console.log(result);

// writeThisMessageOnConsole()

// HTMLElement.addEventListener('click', writeThisMessageOnConsole)

resultFunction();
