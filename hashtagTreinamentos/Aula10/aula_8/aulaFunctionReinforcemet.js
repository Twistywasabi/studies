function procedimento1(outraFuncao) {
    //
    outraFuncao();
}

function procedimento2() {
    console.log('a função procedimento 2 foi executada com sucesso');
}

//procedimento1(undefined) = procedimento1(procedimento2())

procedimento1(procedimento2);

procedimento1(() => {
    console.log('a função procedimento 2 foi executada com sucesso de novo');
});