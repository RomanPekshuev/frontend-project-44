import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * 100);

const isEven = (number) => number % 2 === 0;

export const runGame = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let correctAnswersCount = 0;

    while (correctAnswersCount < 3) {
        const number = getRandomNumber();
        console.log(`Question: ${number}`);
        const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

        const correctAnswer = isEven(number) ? 'yes' : 'no';

        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }

        console.log('Correct!');
        correctAnswersCount += 1;
    }

    console.log(`Congratulations, ${name}!`);
};
