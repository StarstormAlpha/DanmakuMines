import { Engine } from 'excalibur';
import { GAME_DIMENSIONS } from './util/danmakuMinesConstants';

export class Game extends Engine {

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
        
        // finally, play the game
        this.playGame();
    }

    /**
     * method that describes the game after initialization
     */
    playGame(): void {
        
    }
}
