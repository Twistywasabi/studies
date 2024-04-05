// resolução exercício 1 

const compraCliente = 100;

function verificaDesconto (compra) {

    if (compra >= 100) {
        console.log(`Você tem direito ao desconto. Valor de compra com desconto: ${compra * 0.9}`);
    } else {console.log(`Você não tem direito ao desconto. Valor de compra sem desconto: ${compra}`);}

}

verificaDesconto(compraCliente);

// resolução exercício2
const lapis = 20 
const borracha = 60
const caneta = 0

function verificarEstoque (produtoSelecionado) {

    if (produtoSelecionado > 0) {
        console.log("Produto disponível");
    } else {
        console.log("Produto esgotado");
    }

}

verificarEstoque (caneta);

//Resolução exercício 4

const fidelidadeCliente = Math.floor(Math.random() * 101);

console.log(`Sua pontuação é: ${fidelidadeCliente}`);

function categoriaCliente(cliente){

    if (cliente >= 85) {

        console.log('o cliente é categoria "Cliente Premium"');

    } else if (cliente >= 50) {
        console.log('O cliente é categoria "Cliente Regular"');
    } else {
        console.log('O cliente é categoria "Cliente Comum"');
    }

}

categoriaCliente(fidelidadeCliente);

// resolução exercício4
const desempenhoVendedor = 0;

function desempenhoIndividualDeVendedores (vendedor) {

    const metaVendas = 100;
    const percentualVendedor = vendedor / metaVendas;
    if (percentualVendedor >= 1) {
        console.log('Excelente desempenho');} 
    else if ( percentualVendedor >= 0.9) {
        console.log("Muito bom desempenho");
    }
    else if ( percentualVendedor >= 0.8) {
        console.log("Bom desempenho");
    }
    else if ( percentualVendedor >= 0.6) {
        console.log("Desempenho satisfatório");
    }
    else if ( percentualVendedor < 0.6) {
        console.log("Desempenho insatisfatório");
    }
    }

desempenhoIndividualDeVendedores(desempenhoVendedor);

//resolução exercício5

const velocidadeVeiculo = 90;
function verificarVelocidade (velocidade) {

velocidade >= 100 ? console.log("O veículo está acima da velocidade permitida") : console.log("O veículo está dentro da lei"); 

}

verificarVelocidade (velocidadeVeiculo);

//resolução exercício6

/*Crie uma função mensagemSemaforo que recebe uma cor de semáforo como argumento (por exemplo,
"vermelho", "amarelo" ou "verde") e retorna uma mensagem indicando a ação a ser tomada com base na cor
do semáforo. Utilize o operador ternário para determinar a mensagem */

const corDoSemaforo = 'verde';

function mensagemSemaforo (cor) {

    cor === 'vermelho' ? console.log("Pare !!!") : cor === 'amarelo' ? console.log('Atenção cambada !!!') : console.log("Pode passar :)");  

}

mensagemSemaforo(corDoSemaforo);

//resolução exercicio7
/* Crie uma função chamada coresDoSemaforo que recebe uma cor de semáforo como argumento (por
exemplo, "vermelho", "amarelo" ou "verde") e retorna uma mensagem indicando se é seguro passar ou se é
necessário parar */

const corDoSemaforo2 = 'vermelho';

function coresDoSemaforo (color) {

    switch(color){

        case 'verde':
            console.log('Vai logo, mano !');
            break
        case 'amarelo':
            console.log('Devagar, caramba !');
            break
        case 'vermelho':
            console.log('Não é seguro atravessar, c@r$lh&');
            break

    }

}

coresDoSemaforo(corDoSemaforo2);

//resolução exercíco8
/* Crie uma função verificarPlaca que recebe o último dígito da placa de um veículo como argumento (um
número de 0 a 9) e retorna uma mensagem indicando o dia de rodízio em São Paulo, com base no último
dígito da placa.*/

const placaCarro = Math.floor(Math.random() * 10);

console.log(placaCarro);
const diaDaSemana = 'Segunda';

function verificarPlaca( placa) {


    switch(placa){

        case 1:
        case 2:
            console.log('O dia de rodízio é segunda');
            break
        case 3:
        case 4:
            console.log('O dia de rodízio é terça');
            break
        case 5:
        case 6:
            console.log('O dia de rodízio é quarta');
            break
        case 7:
        case 8:
            console.log('O dia de rodízio é quinta');
            break
        case 9:
        case 0:
            console.log('O dia de rodízio é sexta');
            break
        default:
            console.log('Não existe essa placa com esse número final');
    }


}

verificarPlaca(placaCarro);