const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const runProgressionGame = () => {
    const length = getRandomInt(5, 10);
    const start = getRandomInt(1, 20);
    const step = getRandomInt(2, 5);

    const progression = [];
    for (let i = 0; i < length; i += 1) {
        progression.push(start + i * step);
    }

    const hiddenIndex = getRandomInt(0, length - 1);
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';

    const question = progression.join(' ');
    return { question, correctAnswer: correctAnswer.toString() };
};