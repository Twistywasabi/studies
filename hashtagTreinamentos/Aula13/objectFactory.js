//factory function

function createAccount (username, accountNumber, initialBalance) {

    return {
        name: username,
        accountNumber,
        balance: initialBalance,
        displayBalance: function () {
            console.log(
                `account number ${this.accountNumber} has a total balance of ${this.balance}`
            );
        },
    };

};

const account1 = createAccount('Lucas Hideaki', '123456789', 500 );

console.log(account1);
account1.displayBalance();

const account2 = createAccount('Lira', '987654321', 1000 );
console.log(account2);
account2.displayBalance();