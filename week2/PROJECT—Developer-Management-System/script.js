let developers = [
  {
    firstName: 'Fatima',
    age: 28,
    country: 'USA',
    skills: ['html', 'css', 'GitBash'],
    isEmployed: true,
    salary: 6000
  },
  {
    firstName: 'John',
    age: 20,
    country: 'France',
    skills: ['Docker', 'React', 'Python'],
    isEmployed: true,
    salary: 8000
  },
  {
    firstName: 'Omar',
    age: 17,
    country: 'India',
    skills: ['Security', 'PHP', 'Tailwind'],
    isEmployed: false,
    salary: 1000
  }
]

// ! 1-Display all developers.
function displayDevelopers (arr) {
  arr.forEach(element => {
    return console.log(element.firstName, element.country, element.salary)
  })
}

// ! 2-Add a new developer into the array.
function addDeveloper (arr, fName, old, live, skill, employed, prix) {
  let newDeveloper = {
    firstName: fName,
    age: old,
    country: live,
    skills: skill,
    isEmployed: employed,
    salary: prix
  }
  return arr.push(newDeveloper)
}
addDeveloper(
  developers,
  'Ahmed',
  10,
  'Canada',
  ['html', 'css', 'typescript'],
  false,
  3000
)
displayDevelopers(developers)

// ! 3-Display only developers older than 18.
function showAdultDevelopers (arr) {
  return console.log(arr.filter(element => element.age > 18))
}
showAdultDevelopers(developers)

// ! 4-Display only developers where isEmployed === false
function showUnemployedDevelopers (arr) {
  return console.log(arr.filter(element => element.isEmployed === false))
}
showUnemployedDevelopers(developers)

// ! 5- addSkill
function addSkill (arr, i, newSkill) {
  return arr[i].skills.push(newSkill)
}
addSkill(developers, 0, 'php')
console.log(developers[0].skills)

// ! 6- removeSkill
function removeSkill (arr, i, deletedSkill_i) {
  return arr[i].skills.splice(deletedSkill_i, 1)
}
removeSkill(developers, 0, 1)
console.log(developers[0].skills)

// ! 7-updateSalary
function updateSalary (arr, i, newSalary) {
  return (arr[i].salary = newSalary)
}
updateSalary(developers, 1, 10000)
console.log(developers[1].salary)

// ! 8-findDeveloper
function findDeveloper (arr, nom) {
  return console.log(arr.find(element => (element.firstName === nom)))
};
findDeveloper(developers, 'Ahmed')

// ! 9-showHighSalaryDevelopers
function showHighSalaryDevelopers (arr) {
  return console.log(arr.filter(element => element.salary > 5000))
};
showHighSalaryDevelopers(developers)


// ! 10-calculateTotalSalaries
function calculateTotalSalaries (arr) {
  return console.log(arr.reduce((total, element) => total + element.salary, 0))
};
calculateTotalSalaries(developers)

// todo bonus showDeveloperSkills
function showDeveloperSkills(arr) {
    arr.forEach(fname => {
        console.log(fname.firstName);
        fname.skills.forEach(skill => {
            console.log(skill);
        });
    });
};
showDeveloperSkills(developers);