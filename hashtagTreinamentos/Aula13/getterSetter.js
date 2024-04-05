/* function BankAccount(personName, initialBalance, address){
    this.personName = personName;
    this.balance = initialBalance;
    this.address = address;
    this.printInfo = function () {
        console.log(`Essa conta pertence a ${this.personName} residente no endereço ${this.address} e possui um saldo atual de ${Number(this.balance).toFixed(2)} reais`);

    };
};

const ba1 = new BankAccount('Daniel', 2000, 'Rua que sobe e desce');

ba1.printInfo();
console.log(typeof ba1);
console.log(ba1 instanceof BankAccount) */

class BankAccount {
  _balance = 0;

  constructor(personName, initialBalance, address) {
    this.personName = personName;
    this._balance = initialBalance;
    this.address = address;
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    if (Math.abs(this._balance - value) > 2000) {
      throw new Error(
        "Não permitimos saques ou depósitos maiores que R$ 2000,00"
      );
    }
    this._balance = value;
  }

  printInfo() {
    console.log(
      `Essa conta pertence a 
            ${this.personName} residente no endereço 
            ${this.address} e possui um saldo atual de 
            ${Number(this._balance).toFixed(2)} reais`
    );
  }
}

const ba1 = new BankAccount("Daniel", 2000, "Rua que sobe e desce");

ba1.balance = ba1.balance - 2001;

console.log(ba1);
