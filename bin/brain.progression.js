#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getProgression = (start, step, length) => {
  return Array.from({ length }, (_, i) => start + i * step);
};

const getQuestion = (progression, missingIndex) => {
  const question = [...progression];
  question[missingIndex] = '..';
  return question.join(' ');
};

const brainProgression = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  const length = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  const start = Math.floor(Math.random() * 10);
  const step = Math.floor(Math.random() * 5) + 1;
  const progression = getProgression(start, step, length);
  
  const missingIndex = Math.floor(Math.random() * length);
  const missingValue = progression[missingIndex];

  const question = getQuestion(progression, missingIndex);
  
  console.log(`Question: ${question}`);
  
  const userAnswer = readlineSync.question('Your answer: ');

  if (parseInt(userAnswer, 10) === missingValue) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${missingValue}'.`);
    console.log(`Let's try again, ${name}!`);
    return;
  }

  console.log(`Congratulations, ${name}!`);
};

brainProgression();