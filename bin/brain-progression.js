import playGame from '../src/cli.js';
import generateRound from '../src/progression.js';

const description = 'What number is missing in the progression?';

playGame(description, generateRound);
