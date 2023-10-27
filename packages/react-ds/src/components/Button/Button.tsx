import { useState } from 'react';
import { TextAlign } from '../../types';
import classNames from 'classnames';
import { usePrefix } from '../../hooks/usePrefix';
import { getCssPrefix } from '../../utils/styles';
import './button.scss';
import { composeEventHandlers } from '../../utils/events';
import { Loader } from '../Loader/Loader';
import { abbreviate } from '../../utils/abbreviations';

type Size =
  | 'small'
  | 'medium'
  | 'large';

type Type = 
  | 'primary'
  | 'secondary'
  | 'outline';

interface ButtonProps {
  /** A unique identifier for the button */
  id?: string;

  /** The content to display inside the button */
  children: string | string[];

  /** The size of the button, affecting height and width */
  size?: Size;

  /** The type of the button, affecting color, outline and box shadow */
  type?: Type;

  /** Allows the button to grow to the width of its container */
  fullWidth?: boolean;

  /** Disables the button, disallowing merchant interaction */
  disabled?: boolean;

  /** Replaces button text with a spinner while a background action is being performed */
  loading?: boolean;

  /** Sets the button in a pressed state */
  pressed?: boolean;

  /** Changes the inner text alignment of the button */
  textAlign?: TextAlign; 

  /** Callback when clicked */
  onClick?(): void;

  /** Callback when button becomes focused */
  onFocus?(): void;

  /** Callback when focus leaves button */
  onBlur?(): void;

  /** Callback when mouse enters */
  onMouseEnter?(): void;

  /** Callback when mouse leaves */
  onMouseLeave?(): void;
}

/**
 * Button component
 */
export const Button = ({
  children,
  size,
  type,
  disabled = false,
  loading = false,
  pressed = false,
  fullWidth,
  onClick,
  onFocus,
  onBlur,
  onMouseEnter,
  onMouseLeave,
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isPressed, setIsPressed] = useState(pressed);

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
  const buttonClasses = classNames(
    `${prefix}--btn`,
    `${prefix}--btn--${type}`,
    `${prefix}--btn--${abbreviate(size)}`,
    {
      [`${prefix}--btn--full-width`]: fullWidth,
      [`${prefix}--btn--disabled`]: disabled,
      [`${prefix}--btn--loading`]: loading,
      [`${prefix}--btn--pressed`]: isPressed,
      [`${prefix}--btn--hovered`]: isHovered,
      [`${prefix}--btn--focused`]: isFocused,
    }
  );
  const eventHandlers = {
    onClick: composeEventHandlers([onClick, handleClick]),
    onFocus: composeEventHandlers([onFocus, handleFocus]),
    onBlur: composeEventHandlers([onBlur, handleBlur]),
    onMouseEnter: composeEventHandlers([onMouseEnter, handleMouseEnter]),
    onMouseLeave: composeEventHandlers([onMouseLeave, handleMouseLeave]),
  }
  
  const buttonMarkup = 
    <button
      type="button"
      className={buttonClasses}
     {...eventHandlers}
    >
      {loading &&
        <Loader size='small' type={type === 'primary' ? 'secondary' : 'primary'}></Loader>
      }
      {!loading && children}
      
    </button>
  ;

  return buttonMarkup;
};
