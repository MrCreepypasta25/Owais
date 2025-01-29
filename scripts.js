document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', function() {
        const userChoice = this.getAttribute('data-choice');
        const computerChoice = getComputerChoice();
        const result = getResult(userChoice, computerChoice);
        
        document.getElementById('result').textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
    });
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else { 
        return 'You lose!';
    }
}


