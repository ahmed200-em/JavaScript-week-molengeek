const form = document.querySelector("#studentForm");
const input = document.querySelector("#studentName");
const ul = document.querySelector("#students");
const counter = document.querySelector("p");
let students = [];
let count=0
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!input.value) {
    alert("Please enter a student name")
    return
  };
  const list = document.createElement('li');
  list.textContent=input.value
  ul.appendChild(list);
  count++
  counter.textContent=`Total Students: ${count}`
  students.push(input.value)
  localStorage.setItem('studentSaved', JSON.stringify(students))
  input.value='';
});
let studentsLocal = localStorage.getItem('studentSaved')
console.log(studentsLocal);
const type=document.querySelector('h1')

console.log(typeof(studentsLocal));
// students=JSON.parse(studentsLocal)
// console.log(typeof(students));

// students.forEach(element => {
//     console.log(element);
    
// });
input.addEventListener('input',()=>{
    console.log('student is typing');
    
})