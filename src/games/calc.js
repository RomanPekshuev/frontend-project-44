import getRandomInt from '../utils.js'; // Предположим, что у вас есть утилита для генерации случайных чисел

const operations = ['+', '-', '*'];

const calcGame = () => {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const operation = operations[getRandomInt(0, operations.length)];

  let answer;
  switch (operation) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
      break;
  }

  return {
    question: `${num1} ${operation} ${num2}`,
    answer,
  };
};

export default calcGame;
