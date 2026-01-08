import type P5 from "p5"

export default class SceneController {
  p5!: P5
  scene: "LOAD" | "MENU" | "PLAY" = "LOAD"

  constructor() {}
}
