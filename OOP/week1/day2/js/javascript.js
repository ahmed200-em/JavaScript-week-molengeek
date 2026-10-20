let form = document.getElementById("formulaire");
let nameInput = document.getElementById("name");
let soldInput = document.getElementById("sold");
let table = document.getElementById("table");

let accounts = [];

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameValue = nameInput.value.trim();
    const soldValue = parseFloat(soldInput.value);
    if (nameValue === "") {
        alert("Le nom ne peut pas être vide !");
        return;
    }
    if (isNaN(soldValue) || soldValue < 0) {
        alert("Le solde doit être supérieur ou égal à 0 !");
        return;
    }
    const account = new BankAccount(nameValue, soldValue);
    accounts.push(account);
    table.innerHTML += `
        <tr>
            <td>${account.owner}</td>
            <td>${account.balance}</td>
        </tr>
    `;
    displayAccounts(accounts);
    nameInput.value = "";
    soldInput.value = "";
});

let display = document.getElementById("display")
console.log(accounts);

function displayAccounts(accounts){
    display.innerHTML=``
    for (let i = 0; i < accounts.length; i++) {
        const ownerName = accounts[i].owner;
        const ownerSold = accounts[i].getBalance();
        
        let paragraph = document.createElement("p");
        
        paragraph.textContent=`Account create for MR ${ownerName} with ${ownerSold} MAD in balance\n`;
        display.appendChild(paragraph)
    }
}