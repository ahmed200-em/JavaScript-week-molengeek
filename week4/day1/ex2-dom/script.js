const title = document.querySelector('h1');
title.textContent="Welcome to MolenGeek";

const description = document.querySelector('.description');
description.innerHTML="Building interactive web pages";

const input = document.querySelector('input');
console.log(input);

const cardH2 = document.querySelector('.card h2');
const card = document.querySelector('.card');

const button = document.querySelector('button');
button.addEventListener("click",() =>{
    console.log("Button Clicked!");
    cardH2.textContent="Future Developer"    
});

card.classList.add("active");

const cardActive = document.querySelector(".active");

cardActive.style.backgroundColor="red";