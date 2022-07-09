import { Actor, Color, CollisionType } from "excalibur";
import { GameSceneDimensions } from "../interfaces/GameSceneDimensions";

export class Paddle extends Actor {
    constructor(dimensions: GameSceneDimensions, paddleColor?: Color){
        super({
            x: 150,
            y: dimensions.gameHeight - 40,
            width: 200,
            height: 20,
            color: paddleColor ? paddleColor: Color.White,
        });
        this.body.collisionType = CollisionType.Fixed;
    }
}