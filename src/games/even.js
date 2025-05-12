#!/usr/bin/env node
import { randomizer, getCorrectAnswer } from '../utils.js';
import playGame from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const number = randomizer();
  return [String(number), getCorrectAnswer(number)];
};

export default () => {
  playGame(gameRules, getQuestionAndAnswer);
};