const buttons = document.querySelectorAll('button')


buttons.forEach(button => {

  function btnClicked() {
    console.log("User choice", button.id)
  }

  button.addEventListener('click', btnClicked)
})

function computerPlay() {
  const choices = ["rock", "paper", "scissors"]
  const randomChoice = Math.floor(Math.random() * choices.length)
  return choices[randomChoice]
}
