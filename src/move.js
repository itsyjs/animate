import { moveKeyframes, computeDeltas, animationDefaults } from './utility.js'
import { reduceMotion } from './reduce-motion.js'

export class Move {
  /** @type {DOMRect | {}} */
  first;
  /** @type {DOMRect | {}} */
  last;
  /** @type {HTMLElement} */
  el;

  constructor(el, { animation = {}, keyframes, respectReduceMotion = true } = {}) {
    this.el = el
    this.first = {}
    this.last = {}
    this.userAnimationOptions = animation
    this.keyframeGenerator = keyframes || moveKeyframes
    this.shouldReduceMotion = respectReduceMotion
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
    const animation = this.el.animate(this.keyframes, this.animationOptions)
    await animation.finished
  }

  get keyframes() {
    return this.keyframeGenerator(computeDeltas(this.first, this.last))
  }

  get defaults() {
    return animationDefaults
  }

  get mergedOptions() {
    return { ...this.defaults, ...this.userAnimationOptions }
  }

  get animationOptions() {
    if (!this.shouldReduceMotion) return this.mergedOptions
    if (!reduceMotion) return this.mergedOptions
    return { ...this.mergedOptions, duration: 0 }
  }
}
