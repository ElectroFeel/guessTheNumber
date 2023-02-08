'use strict';


let secretNumber;
let highScore = 0;
let scoreValue = 20;

function setSecretNumber() {
    secretNumber = Math.floor(Math.random() * 20) + 1;
}

function setScore() {
    document.querySelector('.score').textContent = scoreValue;
}

function setHighScore() {
    if (scoreValue > highScore) {
        highScore = scoreValue;
    }
    document.querySelector('.highscore').textContent = highScore;
}

function checkGameOver() {
    if (scoreValue <= 0) {
        document.querySelector('.guess-message').textContent = 'Игра окончена!';
        document.querySelector('body').style.backgroundColor = 'red'
    }
}

setSecretNumber();

document.querySelector('.check').addEventListener('click', function () { 
    const guessingNumber = Number(document.querySelector('.number-input').value);
    console.log(guessingNumber, typeof guessingNumber);

    if (!guessingNumber) {
        document.querySelector('.guess-message').textContent = 'Введите число!';
    } else if (guessingNumber === secretNumber) {
        document.querySelector('.guess-message').textContent = 'Правильно!';
        setScore();
        setHighScore();
        setSecretNumber();
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.question').style.width = '50rem';
        scoreValue = 20;
    } else if (guessingNumber > secretNumber) {
        if (scoreValue > 0) {
            document.querySelector('.guess-message').textContent = 'Слишком большое число!';
            scoreValue--;
        }
        checkGameOver();
        setScore();
        
    } else if (guessingNumber < secretNumber) {
        if (scoreValue > 0) {
            document.querySelector('.guess-message').textContent = 'Слишком маленькое число!';
            scoreValue--;
        }
        checkGameOver();
        setScore(); 
    }
});

document.querySelector('.again').addEventListener('click', function() {location.reload()});
