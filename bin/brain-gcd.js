#!/usr/bin/env node
import playGame from '../src/index.js';
import generateRound, { description } from '../src/games/gcd.js';

playGame(description, generateRound);