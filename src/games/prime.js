#!/usr/bin/env node
import { randomizer } from '../utils.js';
import playGame from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
    const number = randomizer();
    const question = `${number}`;
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    
    return [question, correctAnswer];
};

export default () => {
    playGame(gameRules, getQuestionAndAnswer);
};