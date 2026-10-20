//! Exercice 1 — Créer des étudiants
//? Crée une classe Student avec un constructor(name, age). Il doit enregistrer name et age sur chaque étudiant.
//? Crée deux étudiants, puis affiche le nom et l’âge de chacun avec console.log().

//! Exercice 2 — Ajouter une méthode
//? Reprends la classe Student. Ajoute une méthode introduce() qui affiche :
//? Je m'appelle Amina et j'ai 20 ans.
//? Crée deux étudiants avec des informations différentes et appelle introduce() pour chacun.

//! Exercice 3 — Compte bancaire
//? Crée une classe BankAccount avec un propriétaire (owner) et un solde (balance). Ajoute une méthode deposit(amount) qui ajoute amount au solde.
//? Crée un compte avec 100 MAD, dépose 50 MAD, puis affiche le solde. Résultat attendu : 150 MAD.

//! Exercice 4 — Retrait bancaire
//? Reprends ta classe BankAccount et ajoute une méthode withdraw(amount).
//? Règles :
//? 1. Si amount est inférieur ou égal à 0, affiche Montant invalide.
//? 2. Si amount est supérieur au solde, affiche Solde insuffisant et ne change pas le solde.
//? 3. Sinon, retire le montant du solde.
//? Ajoute aussi une méthode showBalance() qui affiche le nom du propriétaire et son solde.


class student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `Je m'appelle ${this.name} et j'ai ${this.age} ans`;
  }
}

let student1 = new student("AHmed", 23);
let student2 = new student("Sara", 20);

console.log(student1.name);
console.log(student2.name);
console.log(student1.age);
console.log(student2.age);

console.log(student1.introduce());
console.log(student2.introduce());

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  deposit(amount) {
    return (this.balance += amount);
  }
  withdraw(amount){
    if (amount <= 0 ) {
      return "Montant invalide."
    } else if(amount > this.balance){
      return "Solde insuffisant."
    } else{
      return (this.balance-=amount)
    }
  }
  showBalance(){
    return `votre balance est ${this.balance}`
  }
}

let account = new BankAccount("Ahmed", 100);

console.log(account.deposit(50) + " MAD");
console.log(account.withdraw(-50));
console.log(account.withdraw(250));
console.log(account.withdraw(50));

console.log(account.showBalance());



