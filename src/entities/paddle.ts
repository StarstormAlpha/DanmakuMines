import { Actor, Color, CollisionType } from 'excalibur';
import { GAME_DIMENSIONS } from '../util/danmakuMinesConstants';

export class Paddle extends Actor {
    constructor(paddleColor?: Color) {
        super({
            x: 150,
            y: GAME_DIMENSIONS.gameHeight - 40,
            width: 200,
            height: 20,
            color: paddleColor ? paddleColor : Color.White,
        });
        this.body.collisionType = CollisionType.Fixed;
    }
}
