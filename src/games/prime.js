import { getRandomInRange } from '../utils.js';

export const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const generateRound = () => {
  const number = getRandomInRange(1, 100);
  const question = number.toString();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
