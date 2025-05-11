#!/usr/bin/env node
import playGame from '../src/index.js';
import generateRound, { description } from '../src/games/prime.js';

playGame(description, generateRound);