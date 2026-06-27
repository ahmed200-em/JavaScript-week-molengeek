// ! 1
const title = document.querySelector("h1");
title.textContent = "MolenGeek Dashboard";

// ! 2
const btn = document.querySelector("button");
const input = document.querySelector("input");
const targetList = document.querySelector("#students");
let studentCount = 0;
btn.addEventListener("click", () => {
  const studentsList = document.createElement("li");
  const inputValue = input.value;
  if (!inputValue) {
    alert("Please enter a student name");
    return;
  }
  targetList.appendChild(studentsList);
  studentsList.textContent = inputValue;
  studentsList.innerHTML = inputValue + " - Active";
  input.value = "";
  studentsList.classlist.add("student");
  studentsList.style.backgroundColor = "black";
  studentsList.style.color = "white";
  studentsList.style.padding = "20px";
  studentsList.style.margin = "20px";
  studentsList.style.borderRadius = "15px";
  studentsList.style.width = "200px";
  studentsList.style.textAlign = "center";
  const studentTotal = document.querySelector("p");
  studentTotal.textContent = `Total Students : ${studentCount}`;
  studentCount++;
});
