import type P5 from "p5"
import GameClient, { easeOutElastic } from "./main"
import { customFont } from "./font"
import LoadScene from "./LoadScene"
import SceneController from "./SceneController"
import PlayScene from "./PlayScene"

export default class EndScene {
  gc: GameClient
  p5!: P5
  loadScene!: LoadScene
  sceneController!: SceneController

  completedAmount: number = 0
  inspectCards: PlayScene["deckController"]["inspectModal"]["inspectCards"] = []

  displayCounter: number = 0
  afterCountPrg: number = 0
  countDelay: number = 0
  numBouncePrg: number = 0

  // angle, vel
  magnets: [number, number][] = []

  constructor(gameClient: GameClient) {
    this.gc = gameClient
  }

  normalizeAngle: (a: number) => number = (a) => {
    const p5 = this.p5
    if (a > p5.TWO_PI) {
      return a - p5.TWO_PI
    } else if (a < 0) {
      return a + p5.TWO_PI
    } else {
      return a
    }
  }

  draw() {
    const { p5, loadScene, gc } = this

    loadScene.renderMainBackground()

    // update count
    if (this.countDelay-- < 0 && this.displayCounter < this.completedAmount) {
      this.countDelay = 15 // count speed
      this.numBouncePrg = 0
      this.displayCounter++
      this.magnets.push([p5.random() * p5.TWO_PI, p5.random() * 0.08 - 0.04])
      //@ gain
    }

    if (this.numBouncePrg < 1) {
      if (this.numBouncePrg < 0.08) {
        this.numBouncePrg = 0.08
      } else {
        this.numBouncePrg = p5.min(this.numBouncePrg + 0.005, 1)
      }
    }
    let scaleFactor = easeOutElastic(this.numBouncePrg)

    p5.colorMode(p5.HSB)
    p5.push()
    const num = this.displayCounter + ""
    p5.translate(300, 300)
    scaleFactor *= 0.7 // animated range
    p5.scale(0.3 + scaleFactor, 1.7 - scaleFactor)

    let numColor = p5.color(0, 0, 255)
    if (this.displayCounter === 20) {
      numColor = p5.color((p5.frameCount * 0.8) % 255, 255, 250)
    }
    customFont.render(
      num,
      -customFont.getNumHalfWidth(num, 60),
      30,
      60,
      numColor,
      p5,
    )
    p5.pop()

    // update magnets
    const magnets = this.magnets
    for (let m = 0; m < magnets.length; m++) {
      const magnet = magnets[m]
      magnet[0] = this.normalizeAngle(magnet[0] + magnet[1])
    }

    // spikes
    p5.strokeWeight(5)
    const colorShift = p5.frameCount * 0.2
    for (let i = 0; i < p5.TWO_PI; i += p5.TWO_PI / 100) {
      let spikeHeight = 100
      for (let mi = 0; mi < magnets.length; mi++) {
        let diff = p5.abs(i - magnets[mi][0])
        diff = Math.min(diff, p5.TWO_PI - diff)

        if (diff < 0.25) {
          // smaller = taller
          spikeHeight += (1 - diff / 0.25) * 12
        }
      }

      p5.stroke(((i / p5.TWO_PI) * 255 + colorShift) % 255, 255, 255)

      const c = p5.cos(i)
      const s = p5.sin(i)
      p5.line(
        300 + c * 100,
        300 + s * 100,
        300 + c * spikeHeight,
        300 + s * spikeHeight,
      )
    }
    p5.colorMode(p5.RGB)
  }

  click() {
    if (!this.sceneController.isNotTransitioning()) {
      return
    }
  }
}
