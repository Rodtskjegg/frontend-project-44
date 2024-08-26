#!/usr/bin/env node
import playGame from '../src/engine.js';
import { description, generateRound } from '../src/games/be.js';

playGame(description, generateRound);
