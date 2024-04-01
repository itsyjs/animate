export interface Deltas {
  dx: number;
  dy: number;
  dw: number;
  dh: number;
  first: DOMRect;
  last: DOMRect;
}

export interface MoveOptions {
  /** https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options */
  animation?: KeyframeEffectOptions;
  /** An array of Keyframes - https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats */
  keyframes?: (deltas: Deltas) => Keyframe[];
  /**
   * Will respect prefers-reduced-motion when true and not animate
   * @default true
   */
  respectReduceMotion?: boolean;
}

export declare class Move {
  /** The initial state of the element */
  first: DOMRect | {};
  /** The final state of the element */
  last: DOMRect | {};
  /** The HTML element */
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
