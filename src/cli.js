// src/cli.js
import readlineSync from 'readline-sync';

export const greeting = () => {
    console.log('Welcome to the Brain Games!');
};

export const askQuestion = (question) => {
    return readlineSync.question(`Question: ${question}\nYour answer: `);
};