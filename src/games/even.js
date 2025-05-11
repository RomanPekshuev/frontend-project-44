#!/usr/bin/env node
import getRandomNumber from '../utils/random.js';

const isEven = (n) => n % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';
export default generateRound;