const form = document.getElementById("studentForm");
const studentUnordedList = document.getElementById("studentList");
const studentCount = document.getElementById("studentCount");
const studentNameInput = document.getElementById("studentName");

// Initialize state
let users = JSON.parse(localStorage.getItem("users")) || [];

// Initial render
renderList();

function saveAndRender() {
  localStorage.setItem("users", JSON.stringify(users));
  renderList();
}

function loadUsersFromLocalStorage() {
  const storedUsers = localStorage.getItem("users");
  if (storedUsers) {
    users = JSON.parse(storedUsers);
  }
}

function renderList() {
  studentUnordedList.innerHTML = "";
  
  if (users.length === 0) {
    studentCount.innerText = "No students found.";
  } else {
    studentCount.innerText = users.length;
  }

  users.forEach((userName, index) => {
    const li = document.createElement("li");
    
    // Wrap name in a span for flexbox styling
    const nameSpan = document.createElement("span");
    nameSpan.textContent = userName;
    nameSpan.className = "student-name";

    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "btn-edit";
    editBtn.onclick = () => {
      const newName = prompt("Enter new name:", userName);
      if (
        newName &&
        newName.trim().length >= 3 &&
        newName.trim().length <= 20
      ) {
        users[index] = newName.trim();
        saveAndRender();
      } else if (newName !== null) {
        alert("Name must be between 3 and 20 characters");
      }
    };

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn-delete";
    deleteBtn.onclick = () => {
      users.splice(index, 1);
      saveAndRender();
    };

    li.append(nameSpan, editBtn, deleteBtn);
    studentUnordedList.appendChild(li);
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = studentNameInput.value.trim();

  if (name.length < 3 || name.length > 20) {
    alert("Name must be between 3 and 20 characters");
    return;
  }
  
  const isDuplicate = users.some(
    (existingName) => existingName.toLowerCase() === name.toLowerCase()
  );

  if (isDuplicate) {
    alert("This name already exists in the list.");
    return;
  }
  
  users.push(name);
  studentNameInput.value = "";
  saveAndRender();
});