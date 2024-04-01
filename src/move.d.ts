export interface Deltas {
  dx: number;
  dy: number;
  dw: number;
  dh: number;
  first: DOMRect;
  last: DOMRect;
}

export interface MoveOptions {
  animation?: KeyframeAnimationOptions;
  keyframes?: (deltas: Deltas) => Keyframe[];
}

export declare class Move {
  first: DOMRect;
  last: DOMRect;
  el: HTMLElement;

  constructor(el: HTMLElement, opts?: MoveOptions);
  /** Will automatically call prep and play to animate, callback should cause some reflow for the element */
  when<T>(cb: () => T): Promise<T>;
  /** Stores the initial position of the element */
  prep(): void;
  /** Stores the final position of the element then runs the move animation */
  play(): Promise<void>;

  get keyframes(): Keyframe[];
}
