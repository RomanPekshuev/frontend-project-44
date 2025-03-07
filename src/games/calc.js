import { runGame } from '../index.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomOperator = () => {
    const operators = ['+', '-', '*'];
    const randomIndex = getRandomNumber(0, operators.length - 1);
    return operators[randomIndex];
};

const generateQuestion = () => {
    const num1 = getRandomNumber(1, 50);
    const num2 = getRandomNumber(1, 50);
    const operator = getRandomOperator();
    let correctAnswer;

    switch (operator) {
        case '+':
            correctAnswer = num1 + num2;
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        case '*':
            correctAnswer = num1 * num2;
            break;
        default:
            throw new Error('Unknown operator');
    }

    return {
        question: `${num1} ${operator} ${num2}`,
        correctAnswer: String(correctAnswer),
    };
};

export const getCalcGame = (userName) => {
    runGame(userName, generateQuestion);
};
