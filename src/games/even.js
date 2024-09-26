import { getRandomInRange } from '../utils.js';

const isEven = (number) => number % 2 === 0;

export const generateRound = () => {
  const randomNumber = getRandomInRange(1, 100);
  const question = randomNumber.toString();
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';
