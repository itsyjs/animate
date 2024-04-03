# @itsy/animate

tiny animation tools

## /move

moves elements using FLIP transforms and the Web Animations API

```js
import { Move } from '@itsy/animate/move'

const myElement = document.querySelector('[data-my-element]')
const move = new Move(myElement)
move.when(() => {
  // something that causes myElement to shift position on the page
})
```

### api

- `when` - will automatically call both `prep` and `play`, will return a Promise that resolves the value returned by the callback
- `prep` - stores the initial position of the element
- `play` - stores the final position of the element then runs the move animation

## /accordion

expands and collapses an element

```js
import { Accordion } from '@itsy/animate/accordion'

const myElement = document.querySelector('[data-my-element]')
const move = new Accordion(myElement)
accordion.when(() => {
  myElement.classList.toggle('h-0') // css example -> .h-0 { height: 0 }
})
```

### api

- `collapse` - sets the element's `style.height` to `0px` and then animates the collapse
- `expand` - sets the element's `style.height` to `null` and then animates the expansion
- `when` - will automatically call both `prep` and `play`, will return a Promise that resolves the value returned by the callback
- `prep` - stores the initial position of the element
- `play` - stores the final position of the element then runs the expand/collapse animation
