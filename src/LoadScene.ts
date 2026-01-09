import type P5 from "p5"
import { customFont } from "./font"
import { SubjectType } from "./originalCards"
import GameClient from "./main"

export default class LoadScene {
  gc: GameClient
  p5!: P5
  isLoaded: boolean = false

  starImage!: P5.Image
  cardBackside!: P5.Image[]
  subjectIconImages: P5.Image[] = []
  projectPanelImages: P5.Image[] = []
  cardImages: P5.Image[] = []

  imagesCreateFunctions: Function[] = [
    // create subject icons (60x60)
    () => {
      const p5 = this.p5
      const sqSize = p5.width * 0.1
      p5.noFill()
      p5.strokeWeight(6)

      // science
      p5.clear()
      p5.stroke(61, 235, 154) // green
      p5.square(30, 30, 50)
      this.subjectIconImages[0] = p5.get(0, 0, sqSize, sqSize)

      // tech
      p5.clear()
      p5.stroke(85, 180, 240) // blue
      p5.square(30, 90, 50)
      this.subjectIconImages[1] = p5.get(0, sqSize, sqSize, sqSize)

      // engineer
      p5.clear()
      p5.stroke(205, 145, 235) // purple (orange)
      p5.square(30, 150, 50)
      this.subjectIconImages[2] = p5.get(0, sqSize * 2, sqSize, sqSize)

      // math
      p5.clear()
      p5.stroke(235, 200, 85) // yellow
      p5.square(30, 210, 50)
      this.subjectIconImages[3] = p5.get(0, sqSize * 3, sqSize, sqSize)
    },

    /// star, cardBackside, projectPanels, other texts
  ]

  constructor(gameClient: GameClient) {
    this.gc = gameClient
  }

  private createCardImage() {
    const p5 = this.p5
    const cardIndex = 0
    p5.image(
      this.gc.avatarSheet!,
      300,
      300,
      200,
      200,
      200 * (cardIndex % 4),
      200 * p5.floor(cardIndex / 4),
      200,
      200
    )

    ///  this.cardImages.push(p5.get())
  }

  public update() {
    // create other images with functions in list
    if (this.imagesCreateFunctions.length > 0) {
      this.imagesCreateFunctions.shift()!()
      return
    }

    // create card images if not done yet
    if (this.cardImages.length < 32) {
      // stall to make sure the images are loaded
      //$ if (this.p5.frameCount < 100) { return }
      this.createCardImage()
      return
    }

    // all done
    this.isLoaded = true
  }

  public draw() {
    const p5 = this.p5
    p5.background(20)

    p5.image(this.subjectIconImages[3], 300, 300, 60, 60)

    /// animated spinner
  }
}
