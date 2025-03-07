#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randomInt } from 'crypto';

const welcomeMessage = 'Welcome to the Brain Games!';
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const numberOfQuestions = 3;

const isEven = (number) => number % 2 === 0;

const runGame = () => {
  console.log(welcomeMessage);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  for (let i = 0; i < numberOfQuestions; i++) {
    const questionNumber = randomInt(1, 100);
    console.log(`Question: ${questionNumber}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

runGame();
