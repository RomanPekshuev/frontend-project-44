#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randomInt } from 'crypto';

const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const welcomeMessage = 'Welcome to the Brain Games!';
const gameDescription = 'Find the greatest common divisor of given numbers.';
const numberOfQuestions = 3;

const runGame = () => {
  console.log(welcomeMessage);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  for (let i = 0; i < numberOfQuestions; i++) {
    const num1 = randomInt(1, 100);
    const num2 = randomInt(1, 100);
    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = gcd(num1, num2).toString();

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
