export interface Deltas {
  dx: number;
  dy: number;
  dw: number;
  dh: number;
  first: DOMRect;
  last: DOMRect;
}

export interface MoveOptions {
  /**
   * Options controlling this animation
   * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options
   * @default { duration: 300, easing: 'ease' }
   */
  animation?: KeyframeEffectOptions;
  /**
   * An array of Keyframes
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats
   */
  keyframes?: (deltas: Deltas) => Keyframe[];
  /**
   * Will respect prefers-reduced-motion when true and not animate
   * @default true
   */
  respectReduceMotion?: boolean;
}

export declare class Move {
  /** The initial state of the element */
  first: DOMRect;
  /** The final state of the element */
  last: DOMRect;
  /** The HTML element */
  el: HTMLElement;

  constructor(el: HTMLElement, opts?: MoveOptions);
  /** Will automatically call prep and play to animate, callback should cause some reflow for the element */
  when<T>(cb: () => T): Promise<T>;
  /** Stores the initial position of the element */
  prep(): void;
  /** Stores the final position of the element then runs the move animation */
  play(): Promise<void>;

  /** Called immediately before the animation plays during the when function */
  before?(): void;
  /** Called immediately after the animation plays during the when function */
  after?(): void;

  get keyframes(): Keyframe[];
  get defaults(): KeyframeEffectOptions;
}
