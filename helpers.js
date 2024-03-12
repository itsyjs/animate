/** @typedef {import('./move.d.ts').Deltas} Deltas */

/**
  * @param {DOMRect} first
  * @param {DOMRect} last
  * @returns {Deltas}
  */
export const computeDeltas = (first, last) => ({
  dx: first.left - last.left,
  dy: first.top - last.top,
  dw: first.width / last.width,
  dh: first.height / last.height,
})

/** @param {Deltas} deltas */
export const getKeyframes = ({ dx, dy }) => ([
  { transform: `translate(${dx}px, ${dy}px)` },
  { transform: 'none' },
])

/** @type {KeyframeAnimationOptions} */
export const animationDefaults = { easing: 'ease', duration: 300 }
