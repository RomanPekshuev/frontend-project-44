#!/usr/bin/env node
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const operations = ['+', '-', '*'];

const getQuestionAndAnswer = () => {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    const operation = operations[getRandomInt(0, operations.length - 1)];

    let answer;
    switch (operation) {
        case '+':
            answer = (num1 + num2).toString();
            break;
        case '-':
            answer = (num1 - num2).toString();
            break;
        case '*':
            answer = (num1 * num2).toString();
            break;
        default:
            break;
    }

    const question = `${num1} ${operation} ${num2}`;
    return { question, answer };
};

const description = 'What is the result of the expression?';

export default { getQuestionAndAnswer, description };