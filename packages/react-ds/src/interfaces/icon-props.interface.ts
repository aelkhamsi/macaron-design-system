import { IconEnum } from "../assets/icon.enum";

export interface IconProps {
  /** Name of the icon (should be included in IconEnum) */
  name?: IconEnum | string;

  /** Width of the icon */
  width?: string;

  /** Height of the icon */
  height?: string;

  /** ViewBox value of the icon */
  viewBox?: string;

  /** Color of the icon */
  fill?: string;
}