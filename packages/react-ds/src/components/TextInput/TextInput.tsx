import classNames from "classnames";
import { composeEventHandlers } from "../../utils/events";
import { usePrefix } from "../../hooks/usePrefix";
import './text-input.scss';
import { useState } from "react";

type Type =
  | 'text'
  | 'email'
  | 'number'
  | 'integer'
  | 'password'
  | 'search'
  | 'tel'
  | 'url'
  | 'date'
  | 'datetime-local'
  | 'month'
  | 'time'
  | 'week'
  | 'currency';

interface TextInputProps {
  /** Initial value for the input */
  value?: string;

  /** Label for the input */
  label?: string;

  /** Determine type of input */
  type?: Type;

  /** Name of the input */
  name?: string;

  /** ID for the input */
  id?: string;

  /** Hint text to display */
  placeholder?: string;

  /** Error message */
  errorMessage?: string;

  /** Disable the input */
  disabled?: boolean;

  /** Disable editing of the input */
  readOnly?: boolean;

  /** Set the input as mandaroty */
  mandatory?: boolean;

  /** Callback when changed */
  onChange?(): void;

  /** Callback when clicked */
  onClick?(): unknown;

  /** Callback when button becomes focused */
  onFocus?(): void;

  /** Callback when focus leaves button */
  onBlur?(): void;

  /** Callback when mouse enters */
  onMouseEnter?(): void;

  /** Callback when mouse leaves */
  onMouseLeave?(): void;
}

export const TextInput = ({
  value,
  label,
  readOnly,
  id,
  name,
  type,
  placeholder,
  mandatory,
  errorMessage,
  onChange,
  onClick,
  onFocus,
  onBlur,
  onMouseEnter,
  onMouseLeave,
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = _ => {
    setIsFocused(true);
  }

  const handleBlur = _ => {
    setIsFocused(false);
  }

  const prefix = usePrefix();
  const textInputClasses = classNames({
    [`${prefix}--text-input-focused`]: isFocused,
    ['readony']: readOnly,
  });
  const eventHandlers = {
    onChange: composeEventHandlers([onChange]),
    onClick: composeEventHandlers([onClick]),
    onFocus: composeEventHandlers([onFocus, handleFocus]),
    onBlur: composeEventHandlers([onBlur, handleBlur]),
    onMouseEnter: composeEventHandlers([onMouseEnter]),
    onMouseLeave: composeEventHandlers([onMouseLeave]),
  }

  const textInputMarkup =
    <div className={`${prefix}--text-input`}>
      <label>{label} {mandatory ? '*' : ''}</label>
      <input 
        name={name}
        id={id}
        type={type}
        value={value}
        placeholder={placeholder} 
        className={textInputClasses}
        {...eventHandlers}
      />
      {errorMessage &&
        <div className='error-message'>
        {errorMessage}
        </div>
      }
    </div>
  ;

  return textInputMarkup;
}