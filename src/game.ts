import { Engine } from 'excalibur';
import { Paddle } from './entities/paddle';
import { Ball } from './entities/ball';
import { GAME_DIMENSIONS } from './util/danmakuMinesConstants';

export class Game extends Engine {
    paddle: Paddle = new Paddle();
    ball: Ball = new Ball();
    /**
     * the game constructor, which calls the engine constructor
     */
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
        //add a ball
        this.add(this.ball);
        this.ball.on('postupdate', () => {
            this.ball.updateBallVelocity();
        });
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
