#!/usr/bin/env node
import getRandomNumber from '../utils/random.js';

const generateProgression = (start, step, length) => {
  return Array.from({ length }, (_, i) => start + i * step);
};

const generateRound = () => {
  const progressionLength = 10;
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 10);
  const progression = generateProgression(start, step, progressionLength);
  const hiddenIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return { question, correctAnswer };
};

export const description = 'What number is missing in the progression?';
export default generateRound;