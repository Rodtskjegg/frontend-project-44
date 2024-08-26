import playGame from '../engine.js';
export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Функция для нахождения НОД (алгоритм Евклида)
const findGCD = (a, b) => {
  let x = a;
  let y = b;
  while (y !== 0) {
    const temp =y;
    y =x % y;
    x = temp;
  }
  return x;
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = findGCD(num1, num2).toString();

  return [question, correctAnswer];
};

const startGcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  playGame(description, generateRound);
};

export default startGcdGame;