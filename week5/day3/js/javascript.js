// // ! PART 1 — VARIABLES / CONDITIONS
// let product = {
//   productName: "Laptop",
//   price: 1200,
//   quantity: 0,
//   isAvailable: true,
// };
// let totalPrice = product.price * product.quantity;

// console.log(`${product.quantity} × ${product.productName} = ${totalPrice} MAD`);

// if (product.isAvailable && product.quantity > 0) {
//   console.log("Product can be ordered");
// } else {
//   console.log("Product unavailable");
// }

// let temperature = 40;
// if (temperature > 30) {
//   console.log("its hoot");
// } else if (temperature > 20 || temperature < 30) {
//   console.log("its normal");
// } else if (temperature < 20) {
//   console.log("its cold");
// }

// //! PART 2 — ARRAYS
// const technologies = ["HTML", "CSS", "JavaScript", "Git"];

// technologies.push("react");
// console.log(technologies);
// technologies.unshift("bash");
// console.log(technologies);
// technologies.splice(4, 1);
// console.log(technologies);
// console.log(technologies[technologies.indexOf("JavaScript")]);
// console.log(`total number of technologies: ${technologies.length}`);

// //! PART 3 — LOOPS

// const values = [120, 50, 300, 75, 200];
// let counter = 0;
// for (let i = 0; i < values.length; i++) {
//   if (values[i] > 100) {
//     console.log(values[i]);
//     counter++;
//   }
// }
// console.log(counter);

// const names = ["Ahmed", "Sara", "Omar", "Youssef"];

// for (let i = 0; i < names.length; i++) {
//   if (names[i].includes("a") || names[i].includes("A")) {
//     console.log(names[i]);
//   }
// }

// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }

// //! PART 4 — FUNCTIONS
// function calculatePrice(price, quantity) {
//   return price * quantity;
// }

// function applyDiscount(price, discount) {
//   let discountPrice = (price * discount) / 100;
//   return price - discountPrice;
// }

// console.log(applyDiscount(500, 20));

// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isAdult(16));

// function getLongerWord(word1, word2) {
//   if (word1.length > word2.length) {
//     return word1;
//   }
//   return word2;
// }

// console.log(getLongerWord("yousra", "ahmed"));

// //! PART 5 — OBJECTS
// let product2 = {
//   name: "Smartphone",
//   price: 800,
//   category: "Electronics",
//   stock: 70,
// };

// function productDetails(product) {
//   console.log(`Product Name: ${product.name}`);
//   console.log(`Category: ${product.category}`);
//   console.log(`Price: ${product.price} MAD`);
//   if (product.stock === 0) {
//     product.isAvailable = false;
//     console.log("Out of stock");
//   } else {
//     product.isAvailable = true;
//     console.log(`Stock: ${product.stock}`);
//   }
// }

// productDetails(product2);
// console.log(product2);

// //! PART 6 — ARRAY OF OBJECTS
// let products = [
//   { name: "Laptop", price: 7000, category: "Electronics" },
//   { name: "Mouse", price: 150, category: "Electronics" },
//   { name: "Chair", price: 900, category: "Fourniture" },
//   { name: "Desk", price: 1500, category: "Fourniture" },
// ];

// let total = 0;
// products.forEach((product) => {
//   if (product.category === "Electronics") {
//     console.log(`Product: ${product.name}, Price: ${product.price}`);
//   }
//   if (product.price > 1000) {
//     console.log(`Expensive product: ${product.name}`);
//   }
//   total += product.price;
// });

// console.log(`Total price: ${total}`);

// let chipestProduct = products[0];
// for (let i = 1; i < products.length; i++) {
//   if (products[i].price < chipestProduct.price) {
//     chipestProduct = products[i];
//   }
// }
// console.log(chipestProduct);
// let counter1 = 0;
// let counter2 = 0;
// products.forEach((product) => {
//   if (product.category === "Electronics") {
//     counter1++;
//   } else if (product.category === "Fourniture") {
//     counter2++;
//   }
// });
// console.log("For Electronics category there is " + counter1);
// console.log("For Fourniture category there is " + counter2);

// //! PART 7 — STRINGS
// const username = "  zakaria_dev  ";
// let newusername = username.trim();
// console.log(newusername);
// let charactersCounter = 0;
// for (let i = 0; i < newusername.length; i++) {
//   charactersCounter++;
// }
// console.log(charactersCounter);

// console.log(newusername.toLocaleUpperCase());

// console.log(newusername.includes("dev"));
// let lastusername = newusername.replace("dev", "developer");
// console.log(lastusername);

// //! PART 8 — DOM
// let Form = document.querySelector("#form");
// let productName = document.querySelector("#product-name");
// let productPrice = document.querySelector("#product-price");
// let productQuantite = document.querySelector("#product-quantite");
// let btnAdd = document.querySelector("#btn-add");
// let errorMessage = document.querySelector("#message");

// let displaySection = document.querySelector("#display-section");

// let products = [];

// Form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   let name = productName.value.trim();
//   let price = productPrice.value.trim();
//   let quantite = productQuantite.value.trim();

//   errorMessage.textContent = "";

//   if (name === "" || price === "" || quantite === "") {
//     errorMessage.textContent = "Please fill in all fields";
//     return;
//   }

//   if (isNaN(price) || isNaN(quantite)) {
//     errorMessage.textContent =
//       "Please enter valid numbers for price and quantity";
//     return;
//   }

//   if (Number(price) < 0 || Number(quantite) < 0) {
//     errorMessage.textContent = "Price and quantity cannot be negative";
//     return;
//   }

//   let product = {
//     name: name,
//     price: Number(price),
//     quantity: Number(quantite),
//   };

//   products.push(product);

//   displayProducts();

//   productName.value = "";
//   productPrice.value = "";
//   productQuantite.value = "";

//   errorMessage.textContent = "Product added successfully!";
// });
// function displayProducts() {
//   displaySection.innerHTML = "";
//   products.forEach((product, index) => {
//     let totalPrice = product.price * product.quantity;
//     let productDiv = document.createElement("div");
//     productDiv.classList.add("product");
//     if (totalPrice > 500) {
//       productDiv.classList.add("high-price");
//     }
//     productDiv.innerHTML = `
//       <h3>${product.name}</h3>

//       <p>
//         ${product.name} -
//         ${product.quantity} x
//         ${product.price} MAD =
//         ${totalPrice} MAD
//       </p>

//       <button  class="increase-btn">
//         Increase Quantity
//       </button>
//             <button onclick="deleteProduct(${index})">
//         Delete Product
//       </button>
//     `;
//     let increaseButton = productDiv.querySelector(".increase-btn");
//     increaseButton.addEventListener("click", function () {
//       product.quantity++;
//       displayProducts();
//     });
//     displaySection.appendChild(productDiv);
//   });
// }
// function deleteProduct(index) {
//   products.splice(index, 1);
//   displayProducts();
// }



