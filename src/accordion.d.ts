import type { Move } from './move.d.ts'

export declare class Accordion extends Move {
  /** Expands the element to its content height */
  expand<T>(cb: () => T): Promise<T>;
  /** Collapses the element to a height of 0px */
  collapse<T>(cb: () => T): Promise<T>;
}

