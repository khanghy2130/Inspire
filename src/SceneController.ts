import type P5 from "p5"

type Scene = "LOAD" | "MENU" | "PLAY"

export default class SceneController {
  p5!: P5
  scene: Scene = "LOAD"
  targetScene: Scene = "LOAD"
  prg: number = 2 // 0 to 1: closing; 1 to 2: opening; no input allowed if < 2

  constructor() {}

  public setScene(s: Scene) {
    this.targetScene = s
    this.prg = 0
  }

  public isNotTransitioning(): boolean {
    return this.prg >= 2
  }

  public updateAndRender() {
    if (this.prg >= 2) return
    const p5 = this.p5
    this.prg += 0.01 // 0.01
    if (this.prg >= 1 && this.targetScene !== this.scene) {
      this.scene = this.targetScene // switch scene
    }
    p5.noStroke()
    if (this.prg < 1) {
      p5.cursor(p5.ARROW) // override any hovering
      p5.fill(0, 255 * this.prg)
    } else {
      p5.fill(0, 255 * (2 - this.prg))
    }
    p5.rect(300, 300, 600, 600)
  }
}
