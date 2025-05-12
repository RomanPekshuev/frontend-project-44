#!/usr/bin/env node
import { randomizer } from '../utils.js';
import playGame from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
};

const getQuestionAndAnswer = () => {
    const firstNumber = randomizer();
    const secondNumber = randomizer();
    const question = `${firstNumber} ${secondNumber}`;
    const correctAnswer = String(gcd(firstNumber, secondNumber));
    
    return [question, correctAnswer];
};

export default () => {
    playGame(gameRules, getQuestionAndAnswer);
};