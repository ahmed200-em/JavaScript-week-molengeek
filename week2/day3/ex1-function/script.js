// ! EXERCISE 1 — Discover The Problem
alert("Welcome Zakaria");
alert("Welcome Sara");
alert("Welcome Yassine");
function welcomeStudent () {
  alert('Welcome student')
};
welcomeStudent();
welcomeStudent();
welcomeStudent();

// !EXERCISE 2 — First Parameters
function sayHello (firstName) {
  console.log('Hello' + ' ' + firstName)
};
sayHello('Ahmed');
sayHello('Sara');

// ! EXERCISE 3 — Functions + Numbers
function showSquare (number) {
  console.log(Math.pow(number, 2))
};
showSquare(5);
showSquare(22);
showSquare(3);

// !EXERCISE 4 — Functions + Arrays
let students = ['Ahmed', 'John', 'Fatima', 'Omar'];

function displayStudents () {
  students.forEach(student => {
    console.log(student)
  })
};
displayStudents();

// !EXERCISE 5 — Functions + Objects
let student = {
  firstName: 'Ahmed',
  age: 22,
  country: 'Morocco'
};

function displayStudent(student) {
    console.log(student.firstName);
    console.log(student.age);
    console.log(student.country);
};
displayStudent(student);

// ! EXERCISE 6 — Return
function addNumbers(number1, number2) {
    var Somme = number1 + number2;
    console.log(Somme);
}
addNumbers(4,1);
addNumbers(4,3);
addNumbers(4,1);

// Arrow function 
const addition = (a,b)=>{
  return console.log(a+b);
}
addition(3,4)