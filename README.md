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
