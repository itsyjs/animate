import { getKeyframes, computeDeltas, animationDefaults } from './helpers'

export class Move {
  /** @type {DOMRect} */
  first;
  /** @type {DOMRect} */
  last;
  /** @type {HTMLElement} */
  el;
  /** @type {KeyframeAnimationOptions} */
  animation;

  constructor(el, { animation, keyframes } = {}) {
    this.el = el
    this.first = {}
    this.last = {}
    this.opts = animation ?? animationDefaults
    this.keyframeGenerator = keyframes ?? getKeyframes
  }

  async when(cb) {
    this.prep()
    const v = await cb()
    await this.play()
    return v
  }

  prep() {
    this.first = this.el.getBoundingClientRect()
  }

  async play() {
    this.last = this.el.getBoundingClientRect()
    if (!this.el.animate) return
    const animation = this.el.animate(this.keyframes, this.opts)
    await animation.finished
  }

  get keyframes() {
    return this.keyframeGenerator(computeDeltas(this.first, this.last))
  }
}
