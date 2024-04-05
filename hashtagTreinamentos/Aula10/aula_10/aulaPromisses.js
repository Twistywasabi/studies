const fluminenseCampeaoLibertadores2023 = true;

const promessa = new Promise((resolve, reject) => {
    console.log('Prometo pagar')

    setTimeout(() => {
        if(fluminenseCampeaoLibertadores2023) {
            resolve('Toma aqui seu pagamento, como combinado');
        } else {
            reject('Não ganhei, não vou te pagar ;_;');
        }
    }, 2000);

});
console.log(promessa);
//promessa.then((response) => console.log(response));
promessa.then((response) => {
    console.log(response);
    console.log("Valeu :) ");
}).catch(error => console.error(error));

