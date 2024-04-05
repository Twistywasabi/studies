// resolução exercício 1

const priceHamburguer = 10;
let totalHamburguers = 0;

for (let counting = 0; counting < 7; counting++){

    
    let daysHamburguer = Math.floor(Math.random() * 100);
    console.log(daysHamburguer);
    totalHamburguers = totalHamburguers + daysHamburguer;

}

console.log(`A venda total de habúrgueres é de ${totalHamburguers}; o faturamento foi de: ${totalHamburguers * 10}`);


// resolução exercício 2

/* 
Cardápio
Hambúrguer = 23 reais
refrigerante = 6 reais
Batatas = 12 reais
Sorvete = 7 reais */

const foodMenu = ["hamburguer" , "french fries", 'soda', 'ice cream']
const foodPriceMenu = [23 , 6 , 12 ,7]

for (let counter = 0; counter < 4; counter++ ){

    console.log(foodMenu[counter],foodPriceMenu[counter]);

}// resolução exercício 3

/*Exercício 3: Contagem de Dinheiro no Caixa
Você é o caixa de uma lanchonete e precisa contar o dinheiro recebido até que a última venda do dia seja
feita. Crie um programa que simule a contagem do dinheiro recebido a cada venda até o fechamento da
lanchonete. */

const daysSelling = [32, 48, 72, 50, 32, 67];
let x = 0;
let daysSellingTotal = 0;

while ( x < daysSelling.length) {

    daysSellingTotal = daysSellingTotal + daysSelling[x];
    x++;

}

console.log(`O total de vendas foi:R$ ${daysSellingTotal}`);
console.log(daysSelling.length);

/*Exercício 4: Entrega de Pedidos Pendentes
Você é o entregador de uma lanchonete e precisa entregar pedidos até que não haja mais pedidos
pendentes. Crie um programa que simule a entrega de pedidos até que não haja mais pedidos na lista.*/

let wishesAmount = 6;

while (wishesAmount != 0 ){

    console.log('Você chegou ao seu destino');
    console.log(`Pedido número ${wishesAmount} entregue`);
    wishesAmount --;

}

console.log('Todos os pedidos foram entregues');

/*Exercício 5: Adivinhe o Número Secreto para Desconto
Você deseja criar um programa que permite aos clientes da sua lanchonete adivinharem um número secreto
para ganhar um desconto. Eles podem tentar quantas vezes quiserem, mas só ganharão o desconto quando
adivinharem o número secreto. Crie um programa que use a estrutura do...while para permitir que os clientes
tentem adivinhar o número secreto. */

const secretNumber = 37;

console.log ("Escolha um número de 0 a 50, se acertar, ganhará um desconto na sua próxima compra");

function bettingInator () {

    let z = 0;
    let y = 0;

    do {
        console.log('Adicione o seu número da sorte');
        let luckyNumber = Math.floor(Math.random() * 50)
        console.log(`Voce escolheu ${luckyNumber}`)
        y++;
        z = luckyNumber;
    } while ( z != secretNumber)
    
    console.log(`Parabéns, você acertou o número secreto (${secretNumber}) depois de ${y} tentativas, você ganhou desconto`);

}

bettingInator();



/*Exercício 6: Gerenciamento de Estoque de Itens em Falta
Você é o gerente de uma lanchonete e está verificando o estoque de itens em falta. Crie um programa que
permita que você insira os itens que estão em falta e os adicione ao estoque até que você decida encerrar o
processo.*/

let stock = [
    {produto: 'hamburguer' , quantidade: 670}
    ,{produto: 'salad' , quantidade: 60}
    ,{produto: 'tomato' , quantidade: 47}
    ,{produto: 'onion' , quantidade: 0}
    ,{produto: 'cheeze' , quantidade: 220}
    ,{produto: 'soda', quantidade: 0}
    ,{produto: 'fries' , quantidade: 45}
    ,{produto: 'wrapper' , quantidade: 32}

];

let index = 0;

do {

    console.log(stock[index]);

    if(stock[index].quantidade === 0) {
        console.log('Estoque do produto vazio, adicionando 50 unidades');
        stock[index].quantidade = stock[index].quantidade + 50;
        console.log(stock[index]);
    }

    index ++;

} while (index < stock.length)

console.log(`Novo estoque: `);
console.log(stock);

/*Exercício 6 corrigido*/

const estoqueLanchonete = {

    hamburguer: 20,
    batataFrita: 15,
    refrigerante: 30,
    milkshake:10,

}

function atualizarEstoque (estoque, itemFalta, quantidadeAdicionar) {

    if(estoque.hasOwnProperty(itemFalta)){

        estoque[itemFalta] += quantidadeAdicionar;
        console.log(`Estoque foi atualizado: ${itemFalta}: ${estoque[itemFalta]}`);
    } else {
        console.log("Item não foi encontrado no estoque")
    }

}

console.log('Estoque da Lanchonete');
console.log(estoqueLanchonete);

let continuarAdicionando = true;