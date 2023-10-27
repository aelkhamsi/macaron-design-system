import classNames from "classnames";
import { composeEventHandlers } from "../../utils/events";
import { usePrefix } from "../../hooks/usePrefix";
import { useState } from "react";
import './textarea.scss';

interface TextareaProps {
  /** Initial value for the input */
  value?: string;

  /** Label for the input */
  label?: string;

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

export const Textarea = ({
  value,
  label,
  readOnly,
  id,
  name,
  placeholder,
  mandatory,
  errorMessage,
  onChange,
  onClick,
  onFocus,
  onBlur,
  onMouseEnter,
  onMouseLeave,
}: TextareaProps) => {

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = _ => {
    setIsFocused(true);
  }

  const handleBlur = _ => {
    setIsFocused(false);
  }

  const prefix = usePrefix();
  const textareaClasses = classNames({
    [`${prefix}--textarea-focused`]: isFocused,
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

  const textareaMarkup =
    <div className={`${prefix}--textarea`}>
      <label>{label} {mandatory ? '*' : ''}</label>
      <textarea 
        name={name} 
        id={id}
        placeholder={placeholder}
        className={textareaClasses}
        {...eventHandlers}
      >
        {value}
      </textarea>
      {errorMessage &&
        <div className='error-message'>
        {errorMessage}
        </div>
      }
    </div>
  ;

  return textareaMarkup;
}