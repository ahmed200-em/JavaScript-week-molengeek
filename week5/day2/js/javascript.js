let form = document.querySelector("#expense-form");
let nameInput = document.querySelector("#expense-name");
let amountInput = document.querySelector("#expense-amount");
let selectCategory = document.querySelector("#expense-category");
let btnAdd = document.querySelector("#add-expense-btn");
let nbrExpenses = document.querySelector("#expense-count");
let totalAmount = document.querySelector("#total-amount");
let expenseList = document.querySelector("#expense-list");
let emptyMessage = document.querySelector("#empty-message");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function updateExpenseCount() {
  nbrExpenses.textContent = expenses.length;
}

function updateTotalAmount() {
  let amount = 0;
  expenses.forEach(function (expense) {
    amount += expense.amount;
  });
  totalAmount.textContent = amount + " MAD";
}

function getCategoryIcon(category) {
  if (category === "food") {
    return "fa-mug-hot";
  }
  if (category === "transport") {
    return "fa-bus";
  }
  if (category === "shopping") {
    return "fa-bag-shopping";
  }
  return "fa-box";
}

function getCategoryName(category) {
  if (category === "food") {
    return "Food";
  }
  if (category === "transport") {
    return "Transport";
  }
  if (category === "shopping") {
    return "Shopping";
  }
  return "Other";
}

function saveExpenses() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function displayExpenses() {
  expenseList.innerHTML = "";
  if (expenses.length === 0) {
    emptyMessage.style.display = "block";
    return;
  }
  emptyMessage.style.display = "none";
  expenses.forEach(function (expense, index) {
    let expenseItem = document.createElement("div");
    expenseItem.classList.add("expense-item");
    expenseItem.innerHTML = `
      <span class="expense-number">
        ${index + 1}
      </span>
      <div class="expense-name">
        <div class="category-icon ${expense.category}-icon">
          <i class="fa-solid ${getCategoryIcon(expense.category)}"></i>
        </div>
        <strong>
          ${expense.name}
        </strong>
      </div>
      <strong class="expense-price">
        ${expense.amount} MAD
      </strong>
      <span class="category-badge ${expense.category}">
        ${getCategoryName(expense.category)}
      </span>
      <span class="expense-date">
        ${expense.date}
      </span>
      <button
        class="delete-btn"
        type="button"
        onclick="deleteExpense(${index})"
      >
        <i class="fa-solid fa-trash"></i>
      </button>
    `;
    expenseList.appendChild(expenseItem);
  });
}

function addExpense(event) {
  event.preventDefault();
  let expenseName = nameInput.value;
  let expenseAmount = parseFloat(amountInput.value);
  let expenseCategory = selectCategory.value;
  if (expenseName === "" || expenseCategory === "") {
    alert("Please fill all fields.");
    return;
  }
  let expense = {
    name: expenseName,
    amount: expenseAmount,
    category: expenseCategory,
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
  };
  expenses.push(expense);
  saveExpenses();
  displayExpenses();
  updateExpenseCount();
  updateTotalAmount();
  form.reset();
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  saveExpenses();
  displayExpenses();
  updateExpenseCount();
  updateTotalAmount();
}

form.addEventListener("submit", function (event) {
  addExpense(event);
});

updateExpenseCount();
updateTotalAmount();
displayExpenses();
