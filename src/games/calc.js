const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomOperator = () => {
    const operators = ['+', '-', '*'];
    return operators[getRandomInt(0, operators.length - 1)];
};

export const runCalcGame = () => {
    const num1 = getRandomInt(1, 50);
    const num2 = getRandomInt(1, 50);
    const operator = getRandomOperator();

    let correctAnswer;
    switch (operator) {
        case '+':
            correctAnswer = (num1 + num2).toString();
            break;
        case '-':
            correctAnswer = (num1 - num2).toString();
            break;
        case '*':
            correctAnswer = (num1 * num2).toString();
            break;
        default:
            throw new Error('Unknown operator');
    }

    const question = `${num1} ${operator} ${num2}`;
    return { question, correctAnswer };
};