import { Move } from './move.js'

/** @type {HTMLElement} */
const tb = window.tb
/** @type {HTMLElement} */
const left = window.left
/** @type {HTMLElement} */
const center = window.center

const move = new Move(center)
toggle.addEventListener('click', () => {
  move.when(() => {
    tb.classList.toggle('centered')
    left.classList.toggle('hidden')
  })
})

