#!/usr/bin/env node
import { randomizer } from '../utils.js';
import playGame from '../index.js';

const gameRules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (leftOperand, rightOperand, operator) => {
  switch (operator) {
    case '+':
      return leftOperand + rightOperand;
    case '-':
      return leftOperand - rightOperand;
    case '*':
      return leftOperand * rightOperand;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const getQuestionAndAnswer = () => {
  const leftOperand = randomizer();
  const rightOperand = randomizer();
  const operator = operators[randomizer(operators.length)];
  
  const question = `${leftOperand} ${operator} ${rightOperand}`;
  const correctAnswer = calculate(leftOperand, rightOperand, operator);
  
  return [question, String(correctAnswer)];
};

export default () => {
  playGame(gameRules, getQuestionAndAnswer);
};