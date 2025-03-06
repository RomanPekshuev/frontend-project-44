#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (length, step) => {
    const start = getRandomInt(1, 10);
    return Array.from({ length }, (_, i) => start + i * step);
};

const playGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('What number is missing in the progression?');

    const progressionLength = getRandomInt(5, 10);
    const step = getRandomInt(1, 5);
    const progression = generateProgression(progressionLength, step);

    const hiddenIndex = getRandomInt(0, progression.length - 1);
    const hiddenNumber = progression[hiddenIndex];
    progression[hiddenIndex] = '..';

    console.log(`Question: ${progression.join(' ')}`);

    const answer = readlineSync.question('Your answer: ');

    if (parseInt(answer, 10) === hiddenNumber) {
        console.log('Correct!');
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'.`);
        console.log(`Let's try again, ${name}!`);
        return;
    }

    for (let i = 0; i < 2; i++) {
        const progressionLength = getRandomInt(5, 10);
        const step = getRandomInt(1, 5);
        const progression = generateProgression(progressionLength, step);

        const hiddenIndex = getRandomInt(0, progression.length - 1);
        const hiddenNumber = progression[hiddenIndex];
        progression[hiddenIndex] = '..';

        console.log(`Question: ${progression.join(' ')}`);
        const answer = readlineSync.question('Your answer: ');

        if (parseInt(answer, 10) !== hiddenNumber) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        } else {
            console.log('Correct!');
        }
    }

    console.log(`Congratulations, ${name}!`);
};

playGame();