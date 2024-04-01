export let reduceMotion = false

const windowExists = (typeof window !== 'undefined')
if (windowExists) {
  const query = window.matchMedia('(prefers-reduced-motion: reduce)')
  const callback = ({ matches }) => reduceMotion = matches
  // older browsers don't support the new API, and the old API is deprecated
  if (query.addEventListener) query.addEventListener('change', callback)
  callback(query)
}

