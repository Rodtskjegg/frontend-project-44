import playGame from '../engine.js';

import getRandomInRange from '../utils.js';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const randomNumber = getRandomInRange(1, 100);
  const question = randomNumber.toString();
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(description, generateRound);
};
