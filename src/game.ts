import { Engine } from "excalibur";

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
      this.start();
    }
}