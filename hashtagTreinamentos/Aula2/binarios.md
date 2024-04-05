## Números em computadores -> binários e bits

Se o computador, sendo inspecionado bem a fundo, for entendido como nada mais do que circuitos elétricos que dizem se a corrente pode ou não passar por um determinado caminho em um momento, então eu posso me permitir usar apenas dois números para descrever o seu funcionamento. Esses são o número **0**, indicando que não há corrente/energia, e o número **1**, indicando que há sim corrente/energia. Chamaremos então essa informação binária (descrita por 0 ou 1) de **Bit**.

É então muito natural usarmos os números 1 e 0, já que eles tem um nítido significado físico.

    Mas como o computador consegue então trabalhar com números maiores do que 1?

Agrupando bits, conseguimos descrever números maiores.

_00 => número 0_

_01 => número 1_

_10 => número 2_

_11 => número 3_

Percebemos então que, com o uso de dois algarismos binários, conseguimos descrever 4 números diferentes (de 0 a 3)

    E existe um padrão nisso?

Existe sim. Agrupando 2 bits, pudemos escrever 4 números diferentes. Com 3 bits, podemos escrever 8 números diferentes (confira!). 4 bits nos entregam 16 números diferentes... agora repare:

- com 2 bits, tivemos 4 números diferentes => 4 = $ 2^2 $
- com 3 bits, tivemos 8 números diferentes => 8 = $ 2^3 $
- com 4 bits, tivemos 16 números diferentes => 16 = $ 2^4 $
- com 5 bits, tivemos 32 números diferentes => 32 = $ 2^5 $
- **com n bits, teremos $ 2^n $ números diferentes**

Como é muito normal lidarmos com vários bites agrupados, criou-se uma nova unidade para facilitar o processo. Essa é o _Byte_, feito a partir da junção de 8 bits.

    E como fazemos pra representar números negativos?

Para representar negativos, podemos dedicar 1 bit para o sinal (0 para positivo e 1 para negativo, por exemplo).

Se estabelecermos que, num número de 3 bits, o primeiro representará o sinal, então podemos ter:

- 111 sendo o número -3
- 011 sendo o número +3
