//! EXERCISE 1 — ANIMAL SOUNDS
//? 1. Create an Animal class.
//? 2. Add makeSound() that displays "Animal sound".
//? 3. Create Dog and Cat classes that extend Animal.
//? 4. Override makeSound():
//?    - Dog displays "Woof!"
//?    - Cat displays "Meow!"
//? 5. Store one dog and one cat in an array.
//? 6. Loop through the array and call makeSound().
//? Expected output:
//? Woof!
//? Meow!
class Animal {
  makeSound() {
    console.log("Animal sound");
  }
}
class Dog extends Animal {
  makeSound() {
    console.log("Woof!");
  }
}
class Cat extends Animal {
  makeSound() {
    console.log("Meow!");
  }
}
const animals = [new Dog(), new Cat()];
for (let animal of animals) {
  animal.makeSound();
}

//! EXERCISE 2 — ACCOUNT DESCRIPTIONS
//? 1. Create a BankAccount class.
//? 2. Its constructor receives owner and stores it.
//? 3. Add describe() that displays:
//?    "[owner] has a bank account"
//? 4. Create SavingsAccount and BusinessAccount
//?    classes that extend BankAccount.
//? 5. Override describe() in each child class.
//? 6. Create a savings account for Zakaria
//?    and a business account for Hamza.
//? 7. Store them in an array.
//? 8. Loop through the array and call describe().
//? Expected output:
//? Zakaria has a savings account
//? Hamza has a business account

class BankAccount{
    constructor(owner){
        this.owner=owner;
    }
    describe(){
        return console.log(`${this.owner} has a bank account`);
    }
}
class SavingsAccount extends BankAccount {
    describe(){
        return console.log(`${this.owner} has a Saving account`);
    }
}
class BusinessAccount extends BankAccount {
    describe(){
        return console.log(`${this.owner} has a busniess account`);
    }
}

let Accounts = [new.SavingsAccount("Zakaria"), new.BusinessAccount("Hamza")];
for (const account of Accounts) {
    account.BusinessAccount();
    account.SavingsAccount();
    
}