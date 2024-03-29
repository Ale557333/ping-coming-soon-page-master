const form = document.querySelector('.signup-form')
const feedbackMessage = document.querySelector('.feedback-message')
const usernameInput = document.querySelector('#username')
const inputUser = document.querySelector('.input-user')

const clearInput = (usernameInput) => {
  usernameInput.value = ''
  usernameInput.focus()
}

form.addEventListener('submit', event => {
  event.preventDefault()

  const username = event.target.username.value.trim()
  const usernameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const isAvalidUsername = usernameRegex.test(username)
  
  if (username) {
    feedbackMessage.innerHTML = 'Thanks for submitting!'
    feedbackMessage.classList.remove('error')
    clearInput(usernameInput)
  }

  if (!username) {
    feedbackMessage.innerHTML = 'Whoops! It looks like you forgot to add your email'
    feedbackMessage.setAttribute('class', 'error')
    inputUser.setAttribute('class', 'input-user-error')
    return
  }
  
  if (!isAvalidUsername) {
    feedbackMessage.innerHTML = 'Please provide a valid email address'
    feedbackMessage.setAttribute('class', 'error')
    inputUser.setAttribute('class', 'input-user-error')
  }

})