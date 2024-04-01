import { Move } from "./move.js"

export class Accordion extends Move {
  _change(newHeight) {
    this.prep()
    this.el.style.height = newHeight
    return this.play()
  }
  expand() {
    return this._change(null)
  }
  collapse() {
    return this._change('0px')
  }
  get keyframes() {
    return [
      { height: `${this.first.height}px`, overflow: 'hidden' },
      { height: `${this.last.height}px`, overflow: 'hidden' }
    ]
  }
}
