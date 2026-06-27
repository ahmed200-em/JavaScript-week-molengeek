// ! Create a countdown using
for (let number = 10; number >= 0; number--) {
  if (number === 0) {
    console.log(number)
    console.log('BOOM!')
  } else if (number % 2 === 0) {
    console.log(number)
    console.log('EVEN NUMBER')
  } else {
    console.log(number)
  }
}

// ! EXO 2 — Student Search
let students = ['Ahmed', 'Sara', 'Yassir', 'Iana', 'Omar']
let found = false
for (let index = 0; index < students.length; index++) {
  const element = students[index]
  console.log(element)
  if (element === 'Iana') {
    found = true
  }
}
let counts = students.filter(element =>
  element.toLocaleLowerCase().includes('a')
).length
console.log(counts)
if (found) {
  console.log('Student found')
} else {
  console.log('Student not found')
}

// ! EXO 3 — ATM Machine
let balance = 1000
while (true) {
  balance -= 100
  console.log(`Remaining balance: ${balance}`)
  if (balance < 300 && balance > 0) {
    console.log('WARNING LOW BALANCE')
  }
  if (balance <= 0) {
    console.log('Insufficient funds')
    break
  }
}

// ! EXO 4 — Login System
const password = '1234'
let attempts = 0
while (true) {
  let userInput = prompt('Please enter your password:')
  if (userInput === password) {
    alert('Access granted')
    break
  }
  attempts++
  if (attempts >= 3) {
    alert('Account blocked')
    break
  }
  alert(`Wrong password. Attempts left: ${3 - attempts}`)
}
