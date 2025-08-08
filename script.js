const buttons = document.querySelectorAll('button')


buttons.forEach(button => {

  function btnClicked() {
    console.log(`You clicked ${button.id}!`)
  }

  button.addEventListener('click', btnClicked)
})
