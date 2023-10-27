import type { Target } from '../types';

export interface Link {
  /** The content to display inside the link */
  children?: React.ReactNode;

  /** The url to link to */
  url?: string;

  /** The target of the link */
  target?: Target;

  /** Makes the browser download the url instead of opening it */
  download?: string | boolean;
}