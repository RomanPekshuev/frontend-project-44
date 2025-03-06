#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (length, step, hiddenIndex) => {
    const progression = [];
    const start = getRandomNumber(1, 10);
    for (let i = 0; i < length; i++) {
        progression.push(start + i * step);
    }
    progression[hiddenIndex] = '..';
    return progression;
};

const brainProgression = () => {
    console.log('What number is missing in the progression?');
    const length = getRandomNumber(5, 10);
    const step = getRandomNumber(1, 5);
    const hiddenIndex = getRandomNumber(0, length - 1);

    const progression = generateProgression(length, step, hiddenIndex);
    const correctAnswer = progression[hiddenIndex] === '..' ? progression[hiddenIndex - 1] + step : progression[hiddenIndex];

    console.log(`Question: ${progression.join(' ')}`);
    
    const userAnswer = readlineSync.question('Your answer: ');

    if (parseInt(userAnswer, 10) === correctAnswer) {
        console.log('Correct!');
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log("Let's try again!");
    }
};

brainProgression();