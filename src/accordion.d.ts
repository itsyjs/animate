import type { Move } from './move.d.ts'

export declare class Accordion extends Move {
  /** Expands the element to its content height */
  expand(): Promise<void>;
  /** Collapses the element to a height of 0px */
  collapse(): Promise<void>;
}

