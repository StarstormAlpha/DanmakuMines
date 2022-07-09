import { Engine } from "excalibur";
import { Resources } from "./resources";

class Game extends Engine {
  /**
   * the game constructor, which calls the engine constructor
   */
  constructor() {
    super({
      width: 1200,
      height: 900,
    });
  }
  /**
   * the initialize method, which calls the start function of the engine
   */
  initialize(): void {
    this.start();
  }
}

/**
 * LAUNCH THE GAME
 */

export const game: Game = new Game();
game.initialize();
