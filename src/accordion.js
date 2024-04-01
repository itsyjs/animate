import { Move } from "./move.js"

export class Accordion extends Move {
  expand() {
    this.prep()
    this.el.style.height = null
    return this.play()
  }
  collapse() {
    this.prep()
    this.el.style.height = '0px'
    return this.play()
  }
  get keyframes() {
    return [
      { height: `${this.first.height}px`, overflow: 'hidden' },
      { height: `${this.last.height}px`, overflow: 'hidden' }
    ]
  }
}
