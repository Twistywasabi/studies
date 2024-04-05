function comportamentoA(){
    console.log('estou executando o comportamento A');
    comportamentoB();
    console.log('Finalizaei a execução do comportamento A');
}

function comportamentoB(){
    console.log('estou executando o comportamento B');
    comportamentoC();
    console.log('Finalizaei a execução do comportamento B');
}

function comportamentoC(){
    console.log('estou executando o comportamento C');
    console.log('Finalizaei a execução do comportamento C');
}

comportamentoA();


