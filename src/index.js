
import playGame from './engine.js'; 
import * as evenGame from './games/even.js';
import * as primeGame from './games/prime.js';
import * as progressionGame from './games/progression.js';

const games = [
  { description: evenGame.description, generateRound: evenGame.generateRound },
  { description: primeGame.description, generateRound: primeGame.generateRound },
  { description: progressionGame.description, generateRound: progressionGame.generateRound },
];

const selectedGame = games[1];
playGame(selectedGame.description, selectedGame.generateRound);
