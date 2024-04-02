import { Move } from './src/move.js'
import { describe, it, beforeEach } from 'node:test'
import * as assert from 'node:assert/strict'
import { Window } from 'happy-dom'
import { setTimeout } from 'node:timers/promises'

const window = new Window()
const blankDOMRect = {
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  height: 0,
  x: 0,
  y: 0
}

describe('move', async () => {
  beforeEach((t) => {
    t.el = window.document.createElement('div')
  })
  it('returns an instance', (t) => {
    const m = new Move(t.el)
    assert.ok(m)
    assert.equal(typeof m.el, 'object')
    assert.equal(m.defaults.easing, 'ease')
  })
  it('takes snapshots of the element', (t) => {
    const m = new Move(t.el)
    assert.deepEqual(m.first, {})
    assert.deepEqual(m.last, {})
    m.prep()
    assert.notDeepEqual(m.first, {})
    for (const k of Object.keys(m.first)) {
      assert.equal(m.first[k], blankDOMRect[k])
    }
    assert.deepEqual(m.last, {})
    m.play()
    assert.notDeepEqual(m.first, {})
    assert.notDeepEqual(m.last, {})
    for (const k of Object.keys(m.first)) {
      assert.equal(m.first[k], blankDOMRect[k])
    }
    for (const k of Object.keys(m.last)) {
      assert.equal(m.last[k], blankDOMRect[k])
    }
  })
  it('takes an async callback and returns its value', async (t) => {
    const m = new Move(t.el)
    const result = await m.when(async () => {
      await setTimeout(1)
      return 'value'
    })
    assert.equal(result, 'value')
  })
})
