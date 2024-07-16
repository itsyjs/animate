import { Move } from "./move.js"

export class Accordion extends Move {
  _change(newHeight, cb) {
    return this.when(() => {
      this.el.style.height = newHeight
      if (cb) return cb()
    })
  }
  before() {
    this.el.style.overflow = 'hidden'
  }
  after() {
    this.el.style.overflow = null
  }
  expand(cb) {
    return this._change(null, cb)
  }
  collapse(cb) {
    return this._change('0px', cb)
  }
  get keyframes() {
    return [
      { height: `${this.first.height}px`, overflow: 'hidden' },
      { height: `${this.last.height}px`, overflow: 'hidden' }
    ]
  }
}
