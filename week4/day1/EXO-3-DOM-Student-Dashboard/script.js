const title = document.querySelector('h1')
title.textContent = 'MolenGeek Dashboard'

const list = document.querySelectorAll('ul li')
console.log(list)

const paraStatus = document.querySelector('.status')
paraStatus.innerHTML = 'Online'

const button = document.querySelector('button')
const input = document.querySelector('input')
const cardH2 = document.querySelector('.card h2')
const card = document.querySelector('.card')
button.addEventListener('click', () => {
  input.placeholder = 'Ahmed'
  const value = input.value
  cardH2.textContent = value
})

card.classList.add('active')
card.style.backgroundColor = 'black'
card.style.color = 'white'
card.style.padding = '20px 10px'
card.style.textAlign = 'center'
card.style.borderRadius = '15px'

list.forEach(element => {
  element.textContent = element.textContent.toLowerCase()
})

button.addEventListener('click', () => {
  const value = input.value.trim()
  if (value === '') {
    cardH2.textContent = 'Please enter your name'
  } else {
    cardH2.textContent = value
  }
})
