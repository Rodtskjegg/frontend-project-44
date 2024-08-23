export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
import playGame from '../src/cli.js';

// Функция для нахождения НОД (алгоритм Евклида)
const findGCD = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
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