import playGame from '../engine.js';

import getRandomInRange from '../utils.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const progressionLength = getRandomInRange(5, 10);
  const start = getRandomInRange(1, 10);
  const step = getRandomInRange(1, 10);
  const progression = generateProgression(start, step, progressionLength);

  const hiddenIndex = getRandomInRange(0, progressionLength - 1);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');

  return [question, String(correctAnswer)];
};

export default () => {
  const description = 'What number is missing in the progression?';
  playGame(description, generateRound);
};
