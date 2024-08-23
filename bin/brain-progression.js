#!/usr/bin/env node
import playGame from '../src/engine.js';
import generateRound from '../src/games/progression.js';

const description = 'What number is missing in the progression?';

playGame(description, generateRound);
