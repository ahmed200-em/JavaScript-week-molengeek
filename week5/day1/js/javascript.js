let name = document.querySelector("#name");
let notes = document.querySelectorAll(".inpts");
let btn = document.querySelector("#calculateBtn");
let Eerror = document.querySelectorAll(".error");
let resultBox = document.querySelector("#resultCard");
console.log(name);
console.log(notes);
console.log(btn);
console.log(Eerror);
console.log(resultBox);

let form = document.querySelector(".Form");

console.log(form);

function calculateAverage(grades) {
  let total = 0;
  for (let i = 0; i < grades.length; i++) {
    total = total + grades[i];
  }

  return total / grades.length;
}

function getMention(average) {
  if (average < 10) {
    return "Needs improvement";
  } else if (average < 12) {
    return "pass";
  } else if (average < 14) {
    return "Good";
  } else if (average < 16) {
    return "Very good";
  } else {
    return "Excellent";
  }
}

function highestAndLOwest(grades) {
  let highest = grades[0];
  let lowest = grades[0];

  for (let i = 1; i < grades.length; i++) {
    if (highest < grades[i]) {
      highest = grades[i];
    }

    if (lowest > grades[i]) {
      lowest = grades[i];
    }
  }
  return {
    highest: highest,
    lowest: lowest,
  };
}
form.addEventListener('submit' , function(event){
    event.preventDefault();
    let nom = name.value.trim();
    if (nom === "") {
       Eerror.textContent = "Enter name" 
       return;
        
    }

    let grades = [];
    
    for ( let i = 0; i< notes.length ; i++){
    
        if (notes[i].value === ""){
            Eerror.textContent = "Reaquired Qrades"
            return;
        }
        
        let grade = Number(notes[i].value);

        if (grade < 0 || grade > 20 ){
            
            Eerror.textContent = "Grades must be between 0 & 20"

            return;
            
        }

        grades.push(grade);
        
    }

    let average = calculateAverage(grades);
    let mention = getMention(average);
    let highestLowest = highestAndLOwest(grades);
    if (average < 10){
        resultBox.classList.add('fail')
    }

    else if (average > 10){
        resultBox.classList.add('pass')
    }


    resultBox.innerHTML = `
    <h1>Student Name: ${name.value}</h1>
    <p>Average : ${average},</p>
    <p>mention: : ${mention},</p>
    <p>highes Grade : ${highestLowest.highest},</p>
    <p>Lowest Grade : ${highestLowest.lowest},</p>

    `})