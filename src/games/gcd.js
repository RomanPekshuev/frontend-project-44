#!/usr/bin/env node
import getRandomNumber from '../utils/random.js';

const getGCD = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

const generateRound = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);
  const question = `${a} ${b}`;
  const correctAnswer = String(getGCD(a, b));
  return { question, correctAnswer };
};

export const description = 'Find the greatest common divisor of given numbers.';
export default generateRound;