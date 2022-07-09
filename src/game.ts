import { Engine, Color } from "excalibur";
import { Paddle } from "./entities/paddle";
import { Ball } from "./entities/ball";

let paddle : Paddle;
let ball: Ball;
export class Game extends Engine {
    /**
     * the game constructor, which calls the engine constructor
     */
    constructor() {
      super({
        width: 900,
        height: 675,
      });
    }
    /**
     * the initialize method, which calls the start function of the engine
     */
    initialize(): void {
        // Start the game
        this.start();
        // Add a paddle at the bottom of the screen
        paddle = new Paddle({
            gameWidth: this.drawWidth,
            gameHeight: this.drawHeight,
        });
        this.add(paddle);
        // add a mouse listener
        this.addMouseListener();
        //add a ball
        ball = new Ball();
        this.add(ball);
    }

    addMouseListener(){
        this.input.pointers.primary.on("move", (evt) => {
            if(paddle){
                paddle.pos.x = evt.worldPos.x;
            }
        })
    }
}