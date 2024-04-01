import { Move } from './src/move.js'
import { Accordion } from './src/accordion.js'

/** @type {HTMLElement} */
const tb = window.tb
/** @type {HTMLElement} */
const left = window.left
/** @type {HTMLElement} */
const center = window.center
/** @type {HTMLElement} */
const content = window.content

/** @type {HTMLButtonElement} */
const toggle= window.toggle
/** @type {HTMLButtonElement} */
const toggleExpand = window.toggleExpand
/** @type {HTMLButtonElement} */
const toggleExpandWhen = window.toggleExpandWhen

const move = new Move(center)
toggle.addEventListener('click', () => {
  move.when(() => {
    tb.classList.toggle('centered')
    left.classList.toggle('hidden')
  })
})


const accordion = new Accordion(content)
toggleExpand.addEventListener('click', () => {
  const isExpanded = content.dataset.expanded === 'true'
  accordion[isExpanded ? 'collapse' : 'expand']()
  content.dataset.expanded = !isExpanded
  toggleExpandWhen.disabled = isExpanded
})

toggleExpandWhen.addEventListener('click', () => {
  accordion.when(() => {
    content.classList.toggle('collapsed')
    // only demo-button functionality, not needed for the expansion
    const isExpanded = content.dataset.expanded === 'true'
    content.dataset.expanded = !isExpanded
    toggleExpand.disabled = isExpanded
  })
})
