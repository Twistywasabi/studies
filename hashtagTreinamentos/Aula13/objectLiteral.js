//object literal

const account1 = {

    name: 'Lucas Hideaki',
    accountNumber: '123456789',
    balance: 300,
    displayBalance: function () {
        console.log(
            `account number ${this.accountNumber} has a total balance of ${this.balance}`
        );
    },

};

console.log(account1);
account1.displayBalance();