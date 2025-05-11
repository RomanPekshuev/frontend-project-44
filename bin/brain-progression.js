#!/usr/bin/env node
import playGame from '../src/index.js';
import generateRound, { description } from '../src/games/progression.js';

playGame(description, generateRound);