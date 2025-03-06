#!/usr/bin/env node

import { startGame } from '../src/index.js';
import { runProgressionGame } from '../src/games/progression.js';

startGame(runProgressionGame);