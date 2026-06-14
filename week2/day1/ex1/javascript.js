let nom = prompt("What is your name?");
nom = nom.charAt(0).toUpperCase() + nom.slice(1);
alert(`Welcome to the training: ${nom}`);
let age = prompt("How old are you?");
age = Number(age);
alert(`So your name is ${nom} and you are ${age} years old`);
alert(`Your name contains ${nom.length} characters.`);