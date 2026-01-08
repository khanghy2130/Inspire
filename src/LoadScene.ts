import type P5 from "p5"
import { customFont } from "./font"

export default class LoadScene {
  p5!: P5
  isLoaded: boolean = false

  cardsAreLoaded: boolean = false
  cardImages: P5.Image[] = []

  constructor() {}

  public start() {
    // create subject icons
  }

  public draw() {
    /// spinner
  }

  private createCardImage() {
    // clean up once done
    if (this.cardImages.length === 32) {
      this.cardsAreLoaded = true
      /// clean raw images
    }
  }

  public update() {
    // create card images if not done yet
    if (!this.cardsAreLoaded) {
      // stall to make sure the images are loaded
      ////if (this.p5.frameCount < 100) { return }

      this.createCardImage()
      return
    }

    // create images with functions in list
  }
}
