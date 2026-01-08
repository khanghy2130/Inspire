import GameClient from "./main"
import PlayScene from "./PlayScene"

export default class Gameplay {
  gc: GameClient
  playScene!: PlayScene

  constructor(gameClient: GameClient) {
    this.gc = gameClient
  }

  setUpNewGame() {}
}
