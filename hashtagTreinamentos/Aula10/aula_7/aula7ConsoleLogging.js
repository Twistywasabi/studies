console.log(1);
const result = setTimeout(() => write2OnConsoleAndReturnString((message => {
    console.log(message);
    console.log(message + '- mensagem pela segunda vez')
})), 2000);

console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);

function write2OnConsoleAndReturnString(callbackFunction) {
    console.log(2);
    callbackFunction('Procedure Completed');
}

