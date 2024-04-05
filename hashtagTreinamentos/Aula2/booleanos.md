## O tipo Booleano

Percebemos que "informações binárias" e a computação andam lado a lado. E não só números são entendidos como 0 e 1 pelo computador, mas absolutamente toda informação que ele processa.

    Apesar disso, escrevemos números normais (23, 42, 2148, 4024, -12...) e os comandos que escrevemos são palavras. Por que fazemos isso?

_Usamos informações diferentes de 0 e 1 no JavaScript porque trouxemos o processo de escrever código, de programar, para mais próximo de como nós, humanos, nos comunicamos. JavaScript é conhecida como uma **linguagem de alto nível**, justamente por ser mais próxima do que normalmente escrevemos, e consequentemente de mais fácil entendimento._

Voltando às informações binárias, o JavaScript também possui um outro tipo de dado que existe para descrever algo que só pode ter dois valores. E, apesar de ser natural pensarmos em usar o 0 e o 1, como discutimos, nós demos a essa informação uma _"roupagem mais humana"_.
Os valores que esse tipo de dado permite são as palavras **true** (do inglês, verdadeiro) e **false** (do inglês, falso).

Variáveis com esse tipo de informação são chamadas de variáveis do **tipo Boolean**, ou **Variáveis Booleanas**.

```JavaScript
const valor1 = false;
const valor2 = true;
```

## Operadores Booleanos

Variáveis booleanas tem também o seu próprio conjunto de operações. Chamamos essas de **operações booleanas**, ou de **operações lógicas**.

| Operador | Nome da Operação     | Descrição                                                                                  |
| -------- | -------------------- | ------------------------------------------------------------------------------------------ |
| &&       | AND (operação **e**) | Usamos essa operação quando desejamos que duas condições sejam simultaneamente verdadeiras |
| \|\|     | OR (operação **ou**) | Usamos essa operação quando desejamos que _pelo menos_ uma das condições seja verdadeira   |
| !        | NOT (Inversor)       | Esse é um operador aplicado a um valor booleano quando queremos o seu inverso              |

#### **Exemplos**

```JavaScript
const valor1 = true;
const valor2 = false;

const valor1EValor2 = valor1 && valor2;
const valor1OUValor2 = valor1 || valor2;
const inversoValor1 = !valor1;
const inversoValor2 = !valor2;

console.log(valor1EValor2);
//false
console.log(valor1OUValor2);
//true
console.log(inversoValor1);
//false
console.log(inversoValor2);
//true
```
