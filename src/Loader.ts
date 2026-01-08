import type P5 from "p5"
import GameClient from "./main"
import { customFont } from "./font"

export default class Loader {
  p5!: P5
  isLoaded: boolean = false

  constructor() {
  }

}