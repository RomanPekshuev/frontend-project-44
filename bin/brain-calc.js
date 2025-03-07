#!/usr/bin/env node

import { startGame } from '../src/index.js';
import { getCalcGame } from '../src/games/calc.js';

console.log('Welcome to the Brain Games!');
const userName = startGame();
getCalcGame(userName);