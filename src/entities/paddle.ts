import { Actor, Color, CollisionType } from "excalibur";

export class Paddle extends Actor {
    constructor(gameDimensions: {gameWidth: number, gameHeight: number}, paddleColor?: Color){
        super({
            x: 150,
            y: gameDimensions.gameHeight - 40,
            width: 200,
            height: 20,
            color: paddleColor ? paddleColor: Color.White,
        });
        this.body.collisionType = CollisionType.Fixed;
    }
}