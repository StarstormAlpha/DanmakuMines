import { Actor, CollisionType } from 'excalibur';
import { GAME_DIMENSIONS, BRICK_CONSTANTS } from '../util/danmakuMinesConstants';

export class Brick extends Actor {
    // constructor is only used by the createBricks method below
    constructor(row: number, column: number){
        // calculate brickWidth
        let brickWidth = GAME_DIMENSIONS.gameWidth / BRICK_CONSTANTS.columns - BRICK_CONSTANTS.padding - BRICK_CONSTANTS.padding / GAME_DIMENSIONS.gameWidth
        super({
            width: brickWidth,
            height: BRICK_CONSTANTS.brickHeight,
            x: BRICK_CONSTANTS.xOffset + column * (brickWidth + BRICK_CONSTANTS.padding) + BRICK_CONSTANTS.padding,
            y: BRICK_CONSTANTS.yOffset + row * (BRICK_CONSTANTS.brickHeight + BRICK_CONSTANTS.padding) + BRICK_CONSTANTS.padding,
            color: BRICK_CONSTANTS.brickColors[row % BRICK_CONSTANTS.brickColors.length],
        });
    }

    /**
     * a method that creates all the bricks at once
     * @returns bricks the array of bricks
     */
    static createBricks(): Brick[] {
        const bricks: Brick[] = [];
        for(let row = 0; row < BRICK_CONSTANTS.rows; row++){
            for(let column = 0; column < BRICK_CONSTANTS.columns; column++){
                let brick = new Brick(row, column);
                brick.body.collisionType = CollisionType.Active;
                bricks.push(brick);
            }
        }
        return bricks;
    }
}