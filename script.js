const buttons = document.querySelectorAll('button')


buttons.forEach(button => {

  function btnClicked() {
    console.log('clicked!')
  }

  button.addEventListener('click', btnClicked)
})
