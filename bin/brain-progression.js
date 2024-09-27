#!/usr/bin/env node
import playGame from '../src/engine.js';
import { description, generateRound } from '../src/games/progression.js';

playGame(description, generateRound);
