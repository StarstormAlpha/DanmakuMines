import { CollisionStartEvent, Engine, Actor } from 'excalibur';
import { Paddle } from './entities/paddle';
import { Ball } from './entities/ball';
import { Brick } from './entities/brick';
import { GAME_DIMENSIONS } from './util/danmakuMinesConstants';

export class Game extends Engine {
    paddle: Paddle = new Paddle();
    ball: Ball = new Ball();
    bricks: Brick[] = Brick.createBricks();
    
    constructor() {
        super({
            width: GAME_DIMENSIONS.gameWidth,
            height: GAME_DIMENSIONS.gameHeight,
        });
    }

    /**
     * the initialize method, which calls the start function of the engine
     */
    initialize(): void {
        // Start the game
        this.start();

        // Add a paddle at the bottom of the screen
        this.add(this.paddle);

        // add a mouse listener
        this.addMouseListener();

        // add a ball
        this.add(this.ball);
        
        // add bricks
        this.bricks.forEach(brick => {
            this.add(brick);
        });
        
        // finally, play the game
        this.playGame();
    }
    
    /**
     * method that describes the game after initialization
     */
    playGame(): void{
        // ball bounces on screen edges
        this.ball.on('postupdate', () => {
            this.ball.updateBallVelocity();
        });

        // ball collision with other objects on the screen 
        let colliding = false;
        this.ball.on("collisionstart", ev => {
            if(!colliding){
                // do the effect of the collision only once, cuz the ball could be colliding for multiple frames
                colliding = true;
                this.ballCollision(ev);
            }
        });
        this.ball.on("collisionend", () => {
            colliding = false;
        })
    
        // ball exits screen
        this.ball.on("exitviewport", () => {
            alert("You lost the game.")
        })
    }

    /**
     * a method that checks if ball collides with other objects
     */
    ballCollision(ev: CollisionStartEvent<Actor>){
        if(this.bricks.indexOf(ev.other) > -1){
            ev.other.kill();
        }

        //reverse course after any collision
        let intersection = ev.contact.mtv.normalize();

        if(Math.abs(intersection.x) > Math.abs(intersection.y)){
            this.ball.vel.x *= -1;
        } else {
            this.ball.vel.y *= -1;
        }
    }

    /**
     * a method which makes the mouse control the paddle
     */
    addMouseListener(): void {
        this.input.pointers.primary.on('move', (evt) => {
            if (this.paddle) {
                this.paddle.pos.x = evt.worldPos.x;
            }
        });
    }
}
