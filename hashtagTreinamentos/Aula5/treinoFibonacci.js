// Criar uma função que retorno o n termo da função de fibonacci

function equacaoDeFibonacci (numeroRepeticoes) {

if (numeroRepeticoes === 0){
    return 0;
}

if (numeroRepeticoes === 1){
    return 1;
}

return (

    equacaoDeFibonacci(numeroRepeticoes - 1) + equacaoDeFibonacci(numeroRepeticoes - 2)
    
);

}

console.log(equacaoDeFibonacci(4));