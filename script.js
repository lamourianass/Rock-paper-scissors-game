const buttons = document.querySelectorAll('button')
const resultEl = document.getElementById('result')
let userScore = 0


buttons.forEach(button => {


  button.addEventListener('click', () => {
    const result = playRound(button.id, computerPlay())
    resultEl.textContent = result
  })
})

function computerPlay() {
  const choices = ["rock", "paper", "scissors"]
  const randomChoice = Math.floor(Math.random() * choices.length)
  return choices[randomChoice]
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!"
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}`

  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`
  }
}

