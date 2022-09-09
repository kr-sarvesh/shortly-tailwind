const input = document.getElementById('link-input')
const linkForm = document.getElementById('link-input')
const errMsg = document.getElementById('err-msg')

linkForm.addEventListener('submit', formSubmit)

function formSubmit() {
  e.preventDefault()
  if (input.value === '') {
    errMsg.classList.add('border-red')
  }
}
