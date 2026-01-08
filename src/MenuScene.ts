import type P5 from "p5"
import GameClient from "./main"
import { customFont } from "./font"

export default class MenuScene {
  gc: GameClient
  p5!: P5

  constructor(gameClient: GameClient) {
    this.gc = gameClient
  }

  draw() {
    const { p5 } = this
    p5.cursor(p5.ARROW)

    p5.background(26, 23, 11)
    p5.noStroke()
  }

  click() {}
}
