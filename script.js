'use strict';

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  //Fetching Number
  let guess = Number(document.querySelector('.guess').value);
  //If no number is entered
  if (!guess) {
    document.querySelector('.message').textContent =
      '🔴 Please Enter a Number First';
  }
  //If num is not in range 1-20
  else if (guess > 20 || guess < 1) {
    document.querySelector('.message').textContent =
      'Choose a number between 1 and 20';
  }
  //If answer is right
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥂 Correct Answer';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //If guess is low
  else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too Low';
    score--;
    if (score >= 1) {
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '‼ You Lost';
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
  //If guess is high
  else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too High';
    score--;
    if (score >= 1) {
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '‼ You Lost';
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }

  //Refactoring - Removing duplicate code
  // else if (guess !== secretNumber) {
  //   document.querySelector('.message').textContent =
  //     guess > secretNumber ? '📈 Too High' : '📉 Too Low';
  //   score--;
  //   if (score >= 1) {
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = '‼ You Lost';
  //     document.querySelector('body').style.backgroundColor = 'red';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.guess').value = null;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
