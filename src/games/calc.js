import playGame from '../engine.js';

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: '${operator}'`);
  }
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, num2, operator).toString();

  return [question, correctAnswer];
};

const startCalcGame = () => {
  const description = 'What is the result of the expression?';
  playGame(description, generateRound);
};

export default startCalcGame;
