let pScore = 0;
let cScore = 0;

const buttons = document.querySelectorAll('button');
const roundResult = document.querySelector('.results');
const pSpan = document.querySelector('.pScore');
const cSpan = document.querySelector('.cScore');
let final = '';

const divAgain = document.querySelector('.playAgain');
const buttonAgain = document.createElement('button');
buttonAgain.textContent = 'Play Again?'; 
buttonAgain.addEventListener('click', playAgain);

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (!final) {
      final = game(button.textContent);
    }
    if (final) {
      roundResult.textContent = final;
      divAgain.appendChild(buttonAgain);
    }
  });
});

function computerPlay() {
  const choice = Math.floor(Math.random() * 3 + 1);
  if (choice === 1) {
    return 'Rock';
  } else if (choice === 2) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function playRound(player, cpu) {
  player = player.toLowerCase();
  cpu = cpu.toLowerCase();
  if (player === cpu) {
    return 'It\'s a tie!';
  } else if (player === 'rock') {
    if (cpu === 'paper') {
      return 'You Lose! Paper beats Rock';
    } else {
      return 'You Win! Rock beats Scissors';
    }
  } else if (player === 'paper') {
    if (cpu === 'scissors') {
      return 'You Lose! Scissors beats Paper';
    } else {
      return 'You Win! Paper beats Rock';
    }
  } else if (player === 'scissors') {
    if (cpu === 'rock') {
      return 'You Lose! Rock beats Scissors';
    } else {
      return 'You Win! Scissors beats Paper';
    }
  } else {
    return 'Invalid Input';
  }
}

function game(player) {
  let text;

  text = playRound(player, computerPlay());
  roundResult.textContent = text;
  
  if (text.includes('Win')) {
    pScore++;
  } else if (text.includes('Lose')) {
    cScore++;
  }

  cSpan.textContent = cScore;
  pSpan.textContent = pScore;

  if (pScore === 5 || cScore === 5) {
    if (pScore === cScore) {
      return 'The game has resulted in a Tie.';
    } else if (pScore > cScore) {
      return 'You WIN!!!';
    } else {
      return 'You lose...';
    }
  }
}

function playAgain() {
  final = '';
  pScore = 0;
  cScore = 0;
  roundResult.textContent = 'Rematch? Go on then, Rock, Paper, or Scissors';
  cSpan.textContent = cScore;
  pSpan.textContent = pScore;
  divAgain.removeChild(buttonAgain)
}
