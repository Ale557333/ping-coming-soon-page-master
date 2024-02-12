const form = document.querySelector('.signup-form')
const feedbackMessage = document.querySelector('.feedback-message')
const usernameInput = document.querySelector('#username')

const alertMessage = message => {
  alert(message)
}

form.addEventListener('submit', event => {
  event.preventDefault()

  const username = event.target.username.value.trim()
  const usernameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const isAvalidUsername = usernameRegex.test(username)
  
  if (!username) {
    feedbackMessage.innerHTML = `Whoops! It looks like you forgot to add your email`
    return
  }

  if (!isAvalidUsername) {
    feedbackMessage.innerHTML = `Please provide a valid email address`
    return
  }

})


