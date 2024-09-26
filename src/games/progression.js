import { getRandomNumber } from '../utils.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const progressionLength = getRandomNumber(5, 10); // Длина прогрессии от 5 до 10 чисел
  const start = getRandomNumber(1, 10); // Начальное число
  const step = getRandomNumber(1, 10); // Шаг прогрессии
  const progression = generateProgression(start, step, progressionLength);

  const hiddenIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');

  return [question, String(correctAnswer)];
};

export default generateRound;
