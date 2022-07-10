import { Color } from 'excalibur';

/**
 * the dimensions: width and height of the scene
 */
export const GAME_DIMENSIONS = {
    gameWidth: 900,
    gameHeight: 675,
};

/**
 * the brick dimensions
 */
export const BRICK_CONSTANTS = {
    padding: 20,
    xOffset: 65,
    yOffset: 20,
    columns: 5,
    rows: 3,
    brickHeight: 30,
    // brickWidth is calculated with the game dimensions and the padding
    brickColors: [Color.Violet, Color.Orange, Color.Yellow],
};
