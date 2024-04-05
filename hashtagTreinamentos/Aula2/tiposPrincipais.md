# Alguns dos tipos de dados em JavaScript

## String

- Trata-se do tipo de dado responsável por descrever informações de texto. Representado pelo conteúdo envolto por aspas simples ( **'** ), aspas duplas ( **"** ) ou crase ( **`** ), esse é o tipo que teremos toda vez que estivermos lidando um informação de natureza textual, seja uma frase, uma simples letra, uma palavra, ou até mesmo textos completos.

- Enquanto as aspas simples e duplas proporcionam o mesmo resultado, a crase como delimitadora de uma string tem um significado mais forte. Nós a usamos quando queremos criar uma "string template", isso é, uma string que permite expressões embutidas em si.

```javascript
const texto1 = 'Aqui temos uma string normal.';
const texto2 =
  'Já essa, apesar das aspas duplas ao invés das simples, também é uma string normal';

const numeroQueQueroRegistrar = 31472;
const stringTemplate = `O número que decidi registrar foi o ${numeroQueQueroRegistrar}`;

//console.log(stringTemplate) fará aparecer na tela o seguinte texto:
// O número que decidi registrar foi o 31472
```

## Number

- É o tipo de dado que representa informações numéricas. Sejam números inteiros positivos e negativos (-3, 0, 1, 5 , 12, 213 ...) ou números decimais (23.7253), todos são entendidos como dado do tipo "Number"

```javascript
const numero1 = 27;
const numero2 = 23.25;
const numero3 = -40;
const total = numero1 + numero2 + numero3;

console.log(total);

//10.25
```
