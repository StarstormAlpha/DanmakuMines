import { Actor, CollisionType, Color, vec } from "excalibur";
import { GameSceneDimensions } from "../interfaces/GameSceneDimensions";

let ballSpeed = vec(100, 100);

export class Ball extends Actor {
    constructor(){
        super({
            x: 100,
            y: 300,
            radius: 10,
            color: Color.Red,
        });
        //collisionType = passive means "just tell me when i collide, but do nothing else"
        this.body.collisionType = CollisionType.Passive;
        this.setBallVelocity();
    }
    
    setBallVelocity(){
        setTimeout(() => {
            //velocity in pixels per second
            this.vel = ballSpeed;
        }, 1000);
    }

    updateBallVelocity(dimensions: GameSceneDimensions){
        //left side collision
        if(this.pos.x < this.width / 2){
            this.vel.x = ballSpeed.x;
        }
        //right side collision
        if(this.pos.x + this.width / 2 > dimensions.gameWidth){
            this.vel.x = ballSpeed.x * -1;
        }
        //top collision
        if(this.pos.y < this.height / 2){
            this.vel.y = ballSpeed.y;
        }

    }
}