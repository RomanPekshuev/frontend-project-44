#!/usr/bin/env node
import { randomizer } from '../utils.js';
import playGame from '../index.js';

const gameRules = 'What number is missing in the progression?';

const getProgression = () => {
  const startPoint = randomizer(100);
  const step = randomizer(15);
  return Array.from({ length: 10 }, (_, i) => startPoint + i * step);
};

const getQuestionAndAnswer = () => {
  const progression = getProgression();
  const indexOfHiddenElement = randomizer(10);
  
  const correctAnswer = progression[indexOfHiddenElement];
  
  progression[indexOfHiddenElement] = '..';
  
  const question = progression.join(' ');

  return [question, String(correctAnswer)];
};

export default () => {
  playGame(gameRules, getQuestionAndAnswer);
};