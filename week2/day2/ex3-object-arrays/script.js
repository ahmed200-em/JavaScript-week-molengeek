let students = [
  {
    firstName: 'Alice',
    age: 20,
    country: 'USA',
    skills: ['HTML', 'CSS', 'JavaScript']
  },
  {
    firstName: 'Bob',
    age: 22,
    country: 'Canada',
    skills: ['Python', 'Java']
  },
  {
    firstName: 'Charlie',
    age: 21,
    country: 'USA',
    skills: ['HTML', 'CSS', 'JavaScript']
  }
]
console.log(students)
console.log(students[0].firstName)
console.log(students[1].country)
console.log(students[2].skills)
students[0].skills.push('React')
console.log(students[0].skills)
students[1].age = 18
console.log(students[1].age)
students[2].isGraduated = true
console.log(students[2].isGraduated)
students[0].skills.splice(2, 1)
console.log(students[0].skills)

students.forEach(Element => {
  console.log(Element.firstName, Element.country)
})
let students_18 = [
  {
    Student_name: 'Ahmed',
    Student_age: 22
  },
  {
    Student_name: 'Waled',
    Student_age: 10
  },
  {
    Student_name: 'Samir',
    Student_age: 20
  }
];

console.log(students_18.filter(age => age.Student_age > 18));
