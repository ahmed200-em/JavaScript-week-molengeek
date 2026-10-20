let form = document.getElementById("form");
let inputName = document.getElementById("inputName");
let price = document.getElementById("price");
let quantity = document.getElementById("quantity");
let displayProduct = document.getElementById("displayProduct");
let wrong = document.getElementById("wrong");
let dataArray = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(Number.isInteger(Number(quantity.value)));

  let inputname = inputName.value.trim();
  // inputsValidation(inputname);
  if (inputsValidation(inputname)) {
    savedata();
    inputName.value = "";
    price.value = "";
    quantity.value = "";
    displayProducts();
  }
  console.log(dataArray);
});
function inputsValidation(inputName) {
  if (inputName === "") {
    wrong.textContent = "ENTER A NAME PLEASE";
    wrong.style.color = "red";
    return;
  } else if (price.value <= 0) {
    wrong.textContent = "PRICE CAN NOT BE NULL";
    wrong.style.color = "red";

    return;
  } else if (
    !Number.isInteger(Number(quantity.value)) ||
    quantity.value === ""
  ) {
    wrong.textContent = "QUANTITY SHULD BE INTEGER";
    wrong.style.color = "red";

    return;
  } else {
    wrong.textContent = "";
  }
  return true;
}
function savedata() {
  let dataObject = {
    name: inputName.value,
    price: price.value,
    quantity: quantity.value,
  };
  dataArray.push(dataObject);
}
function displayProducts() {
  let products = dataArray[dataArray.length - 1];
  let productCard = document.createElement("div");
  displayProduct.appendChild(productCard);
  let namepara = document.createElement("p");
  let pricepara = document.createElement("p");
  let quantityPara = document.createElement("p");
  let productPara = document.createElement("p");
  let increasbtn = document.createElement("button");
  namepara.textContent = `name : ${products.name}`;
  pricepara.textContent = `price : ${products.price}`;
  quantityPara.textContent = `quantity : ${products.quantity}`;
  // Keyboard - 2 x 250 MAD = 500 MAD
  productPara.textContent = `${products.name} - ${products.quantity} x ${products.price} MAD = ${products.quantity * products.price}MAD`;
  increasbtn.textContent = "Increase Quantity";
  productCard.appendChild(namepara);
  productCard.appendChild(pricepara);
  productCard.appendChild(quantityPara);
  productCard.appendChild(productPara);
  productCard.appendChild(increasbtn);
  let total = products.quantity * products.price;
  if (total > 500) {
    productCard.classList.add("high-price");
  }
  increasbtn.addEventListener("click", () => {
    let increasement = +products.quantity++;
    quantityPara.textContent = `quantity : ${increasement}`;
    productPara.textContent = `${products.name} - ${increasement} x ${products.price} MAD = ${increasement * products.price}MAD`;
  });
}

