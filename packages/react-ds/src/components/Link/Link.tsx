import { useState } from 'react';
import { usePrefix } from '../../hooks/usePrefix';
import { Target } from '../../types'
import { composeEventHandlers } from '../../utils/events';
import classNames from 'classnames';
import './link.scss';

interface LinkProps {
  /** The content to display inside the link */
  children?: React.ReactNode;

  /** The url to link to */
  url?: string;

  /** The target of the link */
  target?: Target;

  /** Makes the browser download the url instead of opening it */
  download?: string | boolean;

  /** Callback when button becomes focused */
  onFocus?(): void;

  /** Callback when focus leaves button */
  onBlur?(): void;

  /** Callback when mouse enters */
  onMouseEnter?(): void;

  /** Callback when mouse leaves */
  onMouseLeave?(): void;
}

export const Link = ({
  children,
  url,
  target,
  download,
  onFocus,
  onBlur,
  onMouseEnter,
  onMouseLeave,
}: LinkProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  
  const handleClick = _ => {
    setIsPressed(true);
  }

  const handleFocus = _ => {
    setIsFocused(true);
  }

  const handleBlur = _ => {
    setIsFocused(false);
  }

  const handleMouseEnter = _ => {
    setIsHovered(true);
  }

  const handleMouseLeave = _ => {
    setIsHovered(false);
  }

  const prefix = usePrefix();
  const linkClasses = classNames(`${prefix}--lnk`, {
    [`${prefix}--lnk--hovered`]: isHovered,
    [`${prefix}--lnk--focused`]: isFocused,
    [`${prefix}--lnk--pressed`]: isPressed,
  });
  const eventHandlers = {
    onClick: composeEventHandlers(handleClick),
    onFocus: composeEventHandlers([onFocus, handleFocus]),
    onBlur: composeEventHandlers([onBlur, handleBlur]),
    onMouseEnter: composeEventHandlers([onMouseEnter, handleMouseEnter]),
    onMouseLeave: composeEventHandlers([onMouseLeave, handleMouseLeave]),
  }

  const linkMarkup = 
    <a
      href={url}
      target={target}
      download={download}
      className={linkClasses}
      {...eventHandlers}
    >
      {children}
    </a>
  ;

  return linkMarkup;
}