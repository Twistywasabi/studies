/* Resolução do exercício 1

 Escreva uma função imprimirMensagem que aceita uma mensagem e uma função de retorno de chamada
(callback). A função deve imprimir a mensagem no console e, em seguida, invocar a função de retorno de
chamada. 


 function imprimirMensagem (mensagem, callback) {
    console.log(mensagem);
    setTimeout( callback,2000);
};
const callback = () => {
    console.log('Teste 456');
};

imprimirMensagem('Teste 123', callback); 

 Resolução do exercício 2

 Escreva uma função lerArquivo que aceita um nome de arquivo e uma função de retorno de chamada
(callback). A função deve ler o conteúdo do arquivo e passá-lo para a função de retorno de chamada. Por fim,
chame a função lerArquivo() usando um callback que faça o conteúdo do arquivo ser exibido no console.
Dica: disponibilizamos um arquivo de texto para esse exercício. Coloque-o na mesma pasta do seu código
JavaScript pra facilitar a resolução. 


function lerArquivo (nomeArquivo, callback){
    
    const fs = require('fs');
    fs.readFile(nomeArquivo,'utf-8', (err, data) => {
        if (err) {
        console.log('Não foi possível ler o arquivo !!!');
        console.log(err.message);

    return;
    } else {
        callback(data);
    }
    });

};

const callback = (mensagem) => {

    console.log(mensagem);


};

lerArquivo ('./textoExercicio2.txt', callback);
  


Exercício 3: Conceitos Básicos de Promises
Crie uma nova Promise que seja resolvida após um atraso de 1 segundo e retorne a string "Promise
resolvida". Use .then() para lidar com o valor resolvido e imprimir no console.

*/
/* 
const promessaCumprida = true;

const promessa = new Promise((resolve, reject) => {

    console.log('Você cumpriu a promessa ?');
    if (promessaCumprida) {resolve ('Promisse resolvida')} else {reject ('Promisse não foi resolvida') };

});

promessa.then((promessa) => {
    setTimeout(() => {console.log(promessa)},1000);
});
promessa.catch((error) => console.error(error));
 */


/* Exercício 4: Encadeamento de Promises
Crie duas Promises: uma que seja resolvida para "Olá" após um atraso de 1 segundo e outra que seja
resolvida para "Mundo" após um atraso de 2 segundos. Encadeie essas Promises usando .then() para imprimir
"Olá, Mundo" no console. */

/* const promisse1Cumprida = true;

const promisse1 = new Promise ((resolve, reject) => {
    if (promisse1Cumprida) {resolve (setTimeout(() => {console.log('Olá')} ,1000))} else {reject ('promessa 1 não cumprida')};
return promisse1;
});

const promisse2Cumprida = true;

const promisse2 = new Promise ((resolve, reject) => {
    if (promisse2Cumprida) {resolve (setTimeout(() => {console.log('Mundo')} ,2000))} else {reject ('promessa 2 não cumprida')};
return promisse2;
});

promisse1.then((result1) => 
    promisse2.then((result2) => {
        console.log(`${result1}, ${result2}`);
    })); */
/* 
    const promessa1Cumprida = true;

    const promessa1 = new Promise((resolve, reject) => {
      if (promessa1Cumprida) {
        setTimeout(() => {
          resolve('Olá');
        }, 1000);
      } else {
        reject('promessa 1 não cumprida');
      }
    });
    
    const promessa2Cumprida = true;
    
    const promessa2 = new Promise((resolve, reject) => {
      if (promessa2Cumprida) {
        setTimeout(() => {
          resolve('Mundo');
        }, 2000);
      } else {
        reject('promessa 2 não cumprida');
      }
    });
    
    promessa1.then((result1) =>
      promessa2.then((result2) => {
        console.log(`${result1}, ${result2}`);
      })
    ); */

/* Exercício 5: Tratamento de Erros com Promises
Crie uma Promise que seja rejeitada com um erro após um atraso de 1 segundo. Use .catch() para lidar com o
erro e imprimir no console. */

/* const condition = false;

const promessa = new Promise ((resolve, reject) => {
   (setTimeout(() => {reject ('Promessa não foi cumprida')}, 1000))
});

promessa.then(console.log).catch(console.error); */
/* 
Exercício 6: Promise All
Crie três Promises: uma que seja resolvida para "Um" após um atraso de 1 segundo, outra que seja resolvida
para "Dois" após um atraso de 2 segundos e uma terceira que seja resolvida para "Três" após um atraso de 3
segundos. Use Promise.all() para aguardar a resolução de todas as Promises e, em seguida, imprima o array
de valores resolvidos no console. */
/* 
const promessa1Resolvida = true;
const promessa1 = new Promise ((resolve, reject) => {
  if (promessa1Resolvida) {setTimeout(() => {resolve('Um')},1000)} else {reject ('Promessa não resolvida')}
});
const promessa2Resolvida = true;
const promessa2 = new Promise ((resolve, reject) => {
  if (promessa2Resolvida) {setTimeout(() => {resolve('Dois')},2000)} else {reject ('Promessa não resolvida')}
});
const promessa3Resolvida = true;
const promessa3 = new Promise ((resolve, reject) => {
  if (promessa3Resolvida) {setTimeout(() => {resolve('Três')},3000)} else {reject ('Promessa não resolvida')}
});

Promise.all([promessa1, promessa2, promessa3]).then(console.log)
 */
/* Exercico 6 corrigido */

/* const p1 = new Promise((resolve) => { //Porque eu espero que seja resolvida, aconteça algo para nós
  setTimeout(() => {
    resolve('Texto1')
  },1000)
}) 

const p2 = new Promise((resolve) => { //Porque eu espero que quando ela for resolvida, aconteça algo para nós
  setTimeout(() => {
    resolve('Texto2')
  },1000)
}) 

const p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Texto3')
  },3000)
})

Promise.all([p1, p2, p3]);// executar direto não armazena nada, só estou aguardando a resolução do problema

results.then(console.log); */
/* 
Exercício 7: Async/Await Básico
Escreva uma função assíncrona buscarDados que usa await para simular a busca de dados de uma API após
um atraso de 2 segundos. Imprima os dados buscados no console. */

/* async function buscarDados (wish) {

  const movieData = ['O Senhor dos Anéis','Guardiões da Galáxia', 'Bee Movie'];
  console.log(`Busque para mim o filme ${wish}`);
  console.log('Tudo bem, aguarde um momento...');
  const consultMovie = await new Promise ((resolve) => {setTimeout(() => {resolve(movieData[wish])} ,2000)})
  console.log(`Aqui está: ${consultMovie}`)
};

buscarDados(2); */

// Exercício 7 corrigido

/* function searchApiData (name) { //function to simulate an API request

  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve({
        username: name,
        age: Math.floor(80 * Math.random()),
        language_Program: 'Java Script'
      });
    },2000);
  });

};

async function buscarDados (name) {

  const requestResult = await searchApiData(name);
  console.log(requestResult);

};
buscarDados('Lucas'); */

/* Exercício 8 CORRIGIDO: Tratamento de Erros com Async/Await
Escreva uma função assíncrona obterDados que usa await para buscar dados de uma API após um atraso de 1
segundo. Se ocorrer um erro, capture-o e imprima uma mensagem de erro no console. */

/* function buscarDados(){

  return new Promise ((resolve, reject) => {

    const numeroALeatorioEntre0e1 = Math.random(); // sempre entre 0 e 1
    if (numeroALeatorioEntre0e1 > 0.5) {
      resolve({
        color: '#51f',
        shape: 'rectangule',
      })
    }
    reject(new Error('Error Obtaining data'))
  });

}

async function obterDados() {

  try{
    const data = await buscarDados();
    console.log(data);
  } catch (error) {
    console.error(error.message)
  };

}

obterDados(); */

// Recomendado: praticar esse exercício com settimeout

/* Exercício 9: Async/Await com Promise.all()
Escreva uma função assíncrona buscarMultiplosDados que usa Promise.all() e await para buscar dados de
várias APIs simultaneamente. Imprima o array de dados buscados no console. */

 // Números de pipocas vendidas para cada filme (os números de pipocas coincidem com os filmes da lista 'moviesJanuaryAPI')

/* function januaryMovies () {

  return new Promise ((resolve) => {

    setTimeout(() => {
      resolve([
        {filme: 'Guardiões da galáxia', mes:3, dia:23, horario: 'Tarde'},
        {filme: 'Poderoso Chefão', mes:3, dia:23, horario: 'Noite'},
        {filme: 'Batman', mes:3, dia:23, horario: 'Noite'},
        {filme: 'Homem de honra', mes:3, dia:23, horario: 'Tarde'}])
    },4000);

  });
};

function januaryPopcornSale () {
  return new Promise ((resolve) => {

    setTimeout(() => {
      resolve([2000, 3000, 1500, 1000]);
    },2000);

  });
};

async function buscarMultiplosDados () {

  const januaryResults = await Promise.all([januaryMovies(),januaryPopcornSale()])
  console.log(januaryResults);

}

buscarMultiplosDados(); */

/* 
Exercício 10: Async/Await com Tratamento de Erros
Escreva uma função assíncrona obterDadosComFallback que usa try...catch e await para buscar dados de uma
API. Se ocorrer um erro, utilize um valor de fallback e imprima-o no console. */


/* const popcornSaleJanuary = [200, 123, 468, 132];

function popCornSales () {

  const mark = false;

  const popcornSaleJanuary = [200, 123, 468, 132];

  return new Promise((resolve, reject) => {
    if (mark) {
      setTimeout(() => {
        resolve(popcornSaleJanuary)
      },2000)
    } else {

      return reject(new Error('Ocorreu um erro'))

    }
  });

};

async function resultsPopcorn() {
  try {

    const resultados = await popCornSales();
    console.log(resultados);

  } catch (error) {

    console.error(error.message);

  }
}

resultsPopcorn(); */

// Exercicio10 corrigido

//resposta:
const times = [
  'Flamengo',
  'Fluminense',
  'Vasco',
  'Botafogo',
  'Corinthians',
  'Santos',
  'Internacional',
  'Grêmio',
  'São Paulo',
  'Palmeiras',
  'Cruzeiro',
  'Grêmio',
  'Atlético MG',
  ];
  function descobrirCampeaoBrasileiro2023() {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
  const numeroAleatorioEntre0e1 = Math.random();
  console.log(numeroAleatorioEntre0e1);
  if (numeroAleatorioEntre0e1 < 0.2) {
  resolve(
  Math.floor(times.length * Math.random())
  ); /*Aqui eu gerei um índice aleatório pro meu array de times*/
  }
  reject(new Error('erro buscando o time campeão'));
  }, 1500); /*Aqui o setTimeout foi colocado pra simular a espera natural que
  existe na comunicação com outros sistemas*/
  });
  }
  async function obterDadosComFallback() {
  try {
  const indice = await descobrirCampeaoBrasileiro2023();
  console.log(
  `O time campeão do Campeonato Brasileiro de 2023 será o ${times[indice]}`
  );
  } catch (error) {
  console.error(error.message);
  console.log(
  'Já que não conseguimos adivinhar o time, vamos fazer a aposta mais lógica.O campeão será o Fluminense!!!'
  );
  }
  }
  obterDadosComFallback();