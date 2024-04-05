//resolução exercício 1
/*Você é o gerente de uma lanchonete e deseja contar quantos itens diferentes estão no seu cardápio. Crie uma
função recursiva em JavaScript que conte quantos itens diferentes existem no cardápio da lanchonete.*/

const cardapio = ['Hamburguer1' , 'Hamburguer2', 'Hamburguer3', 'Refrigerante1', 'Refrigerante2', 'Refrigerante3', 'BatataFrita'];

let contadorInator = 0;

let numeroItensLista = cardapio.length;

function contadorCardapio (numeroItensLista) {

    if (numeroItensLista === 0) {
        return;
    }
    contadorInator ++;
    console.log(contadorInator);
    contadorCardapio (numeroItensLista - 1);

};

contadorCardapio (numeroItensLista);

console.log(`Existem ${contadorInator} itens no seu cardápio`);

//Correção exercício 1



//resolução exercício 2
/*Você é o caixa de uma lanchonete e deseja calcular o valor total das vendas de hambúrgueres ao longo de
um mês. Cada hambúrguer custa R$10, e você registra o número de hambúrgueres vendidos a cada dia do
mês. Crie uma função recursiva em JavaScript que calcule o valor total das vendas de hambúrgueres no mês.*/

const precoHamburguer = 10;

const quantidadeHamburguerVendidosMes = [12,32,43,24,2,45,67,7,88,9,67,67,75,67,567,5,65,756,75,767,57,56,75,7,57,56,75,67,65,23];

let numeroItenshamburgueresVendidosMes = quantidadeHamburguerVendidosMes.length - 1;

let valorTotalHamburguer = 0;

function calcularHamburgueresVendidosMes (itemLista) {

    if (itemLista === -1) {

        return valorTotalHamburguer;

    }

    valorTotalHamburguer = valorTotalHamburguer + (precoHamburguer * quantidadeHamburguerVendidosMes[itemLista]);

    console.log(`Quantidade de hambúrgueres vendidos no dia: ${quantidadeHamburguerVendidosMes[itemLista]}`);
    
    calcularHamburgueresVendidosMes (itemLista - 1);

}

calcularHamburgueresVendidosMes (numeroItenshamburgueresVendidosMes);

console.log(`O valor total de hambúrgueres vendidos no mês é: ${valorTotalHamburguer}`);

//resolução exercício 3
/*Exercício 3: Listagem de Itens do Cardápio
Você é o gerente de uma lanchonete e deseja listar os itens do cardápio para exibição. Os itens do cardápio
são armazenados em um objeto onde as chaves são os nomes dos itens e osfor valores são os preços. Crie um
programa que use um loop for...in para listar todos os itens do cardápio juntamente com seus preços.*/

//Criar cardapio 

const menu = {Hamburguer: 12, Batata: 6, Refrigerante: 5, Sorvete: 10};

//Listagem do cardapio no terminal


for ( var menuIndex in menu ) {

    console.log('Preço ' + menuIndex + ': R$' + menu[menuIndex] + ',00' );

}

//resolução exercício 4
/*Exercício 4: Calcular o Total da Conta
Você é o caixa de uma lanchonete e deseja calcular o total da conta com base nos itens pedidos por um
cliente. Crie um programa que use um loop for...in para percorrer o pedido do cliente (um objeto com itens e
quantidades) e calcule o valor total da conta.*/

//Criar cardapio 

const menu2 = [12, 6, 5, 10];

//Criar pedido 

const clientOrder = {Hamburguer: 15, Batata: 16, Refrigerante: 20, Sorvete: 15};

//Variavel indice pedido
let indexMenu2 = 0

//Variavel total pedido
let totalOrder = 0;



//Calcular pedido 


for ( var orderCheck in clientOrder ) {

    console.log('Quantidade de ' + orderCheck + ': ' + clientOrder[orderCheck]);
    totalOrder = totalOrder + (menu2[indexMenu2] * clientOrder[orderCheck]);
    console.log('Valor do pedido por unidade: ' + menu2[indexMenu2]);
    indexMenu2 = indexMenu2 + 1
}
 console.log('O valor total do pedido é: R$' + totalOrder);

 //resolução exercício 4 Corrigida
/*Exercício 4: Calcular o Total da Conta
Você é o caixa de uma lanchonete e deseja calcular o total da conta com base nos itens pedidos por um
cliente. Crie um programa que use um loop for...in para percorrer o pedido do cliente (um objeto com itens e
quantidades) e calcule o valor total da conta.*/

//Criar cardapio 
const menu3 = {Hamburguer: 12, Batata: 6, Refrigerante: 5, Sorvete: 10};

//Criar pedido 
const clientOrder2 = {Hamburguer: 10, Batata: 11, Refrigerante: 12, Sorvete: 5};


//Calcular pedido 

function calculateOrder (menu, clientOrder) {

    //Variavel total pedido
    let totalOrder3 = 0;

    for ( const item in clientOrder ){

        if (item in menu) {

            totalOrder3 += clientOrder[item] * menu[item];
            console.log(`Pedido do ${item} anotado.`)

        }

    }

    return totalOrder3;

}

const totalOrder2 = calculateOrder (menu, clientOrder2);
console.log('O total foi de: R$' + totalOrder2);

//resolução exercício 5
/* Exercício 5: Listagem de Itens do Cardápio
Reutilizando o cardápio da lanchonete armazenado em um array do exercício 1, crie um programa que use
um loop for...of para listar todos os itens do cardápio. */

const cardapio2 = ['Hamburguer1' , 'Hamburguer2', 'Hamburguer3', 'Refrigerante1', 'Refrigerante2', 'Refrigerante3', 'BatataFrita'];

function menuListsForOf (cardapio) {

    for (let iterable of cardapio) {

        console.log(iterable);

    }

}

menuListsForOf (cardapio2);

//resolução exercício 6
/*Exercício 6: Calcular o Total da Conta
Você é o caixa de uma lanchonete e deseja calcular o total da conta com base nos itens pedidos por um
cliente. Os itens do pedido estão armazenados em um array de objetos, onde cada objeto tem o nome do
item e a quantidade. Crie um programa que use um loop for...of para percorrer o pedido do cliente e calcule o
valor total da conta.*/

const clientOrder3 = [{produto: 'hamburguer', quantidade: 10}, {produto: 'batata', quantidade: 1}, {produto: 'refrigerante', quantidade: 10}];

const priceTable = [{produto: 'hamburguer', valor: 10}, {produto: 'batata', valor: 15}, {produto: 'refrigerante', valor: 5}];

function restaurantBill (pedido, menu) {

    let totalAccount = 0;
    let indice = 0;

    for (let iterable of pedido) {
        console.log(iterable);
        let variavelTeste = iterable;
        console.log("Quantidade desse produto: " + variavelTeste.quantidade);
        console.log("Valor desse produto: " + menu[indice].valor);
        totalAccount += variavelTeste.quantidade * menu[indice].valor;
        console.log(totalAccount);
        indice += 1;
    }


    console.log("O total da conta foi de: R$" + totalAccount + ',00');

}

restaurantBill (clientOrder3, priceTable);

//resolução exercício 6 corrigido
/*Exercício 6: Calcular o Total da Conta
Você é o caixa de uma lanchonete e deseja calcular o total da conta com base nos itens pedidos por um
cliente. Os itens do pedido estão armazenados em um array de objetos, onde cada objeto tem o nome do
item e a quantidade. Crie um programa que use um loop for...of para percorrer o pedido do cliente e calcule o
valor total da conta.*/

const clientOrder4 = [{produto: 'hamburguer', quantidade: 1}, {produto: 'batata', quantidade: 1}, {produto: 'refrigerante', quantidade: 1}];

const priceTable2 = {hamburguer: 10, batata: 15, refrigerante: 5};

function restaurantBill2 (pedido, menu) {

    let totalConta2 = 0;

    for (const pedidosCliente of pedido) {
        if (pedidosCliente.produto in menu) {
            console.log(menu[pedidosCliente.produto]);
            totalConta2 += menu[pedidosCliente.produto] * pedidosCliente.quantidade;
        }
    }

    return totalConta2;
}

const totalConta2 = restaurantBill2 (clientOrder4, priceTable2);
console.log('Total conta:' + totalConta2 );



