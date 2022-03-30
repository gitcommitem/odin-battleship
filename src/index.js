import './style.css';

import { createPlayer } from './playerFactory';
import { createShip } from './shipFactory';
import { createGameboard } from './gameboardFactory';

const player = createPlayer('human');

const playerShips = [
  createShip(1),
  createShip(2),
  createShip(3),
  createShip(4),
  createShip(5)
];

const [carrier, battleship, destroyer, submarine, patrolBoat] = playerShips;

const playerBoard = createGameboard();
playerBoard.placeShip(carrier, 'A1', 'B1', 'C1', 'D1', 'E1');
playerBoard.placeShip(battleship, 'C3', 'C4', 'C5', 'C6');
playerBoard.placeShip(destroyer, 'G2', 'G3', 'G4');
playerBoard.placeShip(submarine, 'D6', 'E6', 'F6');
playerBoard.placeShip(patrolBoat, 'E2', 'E3');