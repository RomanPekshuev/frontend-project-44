#!/usr/bin/env node
import getRandomNumber from '../utils/random.js';

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2, sqrt = Math.sqrt(n); i <= sqrt; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export default generateRound;