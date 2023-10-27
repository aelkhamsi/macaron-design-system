import { useState } from 'react';
import { usePrefix } from '../../hooks/usePrefix';
import './select.scss';
import { useOutsideClick } from '../../hooks/useOutsideClick';

interface SelectOption {
  /** Machine value of the option; this is the value passed to `onChange` */
  value: string;

  /** Human-readable text for the option */
  label: string;

  /** Option will be visible, but not selectable */
  disabled?: boolean;

  /** Option will selected by default */
  selected?: boolean;
}

interface SelectProps {
  /** Name of the input */
  name?: string;

  /** ID for the input */
  id?: string;

  /** List of options or option groups to choose from */
  options?: SelectOption[];

  /** Label for the select */
  label?: string;

  /** Hint for the select */
  placeholder: string;

  /** Set the input as mandaroty */
  mandatory?: boolean;

  /** Callback when changed */
  onChange?(): void;

  /** Callback when button becomes focused */
  onFocus?(): void;

  /** Callback when focus leaves button */
  onBlur?(): void;
}

export const Select = ({
  name,
  id,
  options,
  label,
  placeholder,
  mandatory,
  onChange,
  onFocus,
  onBlur,
}: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState(getSelectedOption(options))
  const [optionsVisible, setOptionsVisible] = useState(false);
  const prefix = usePrefix();
  

  const selectOption = (event, option) => {
    setSelectedOption(option);
    setOptionsVisible(false);
    event.detail = option;
    if (onChange) {
      onChange();
    }
  }

  const renderOption = option => {
    return <div className='option' key={option.value} onClick={(event) => selectOption(event, option)}>{option?.label}</div>
    
  }

  const toggleOptions = (event) => {
    setOptionsVisible(!optionsVisible);
    event.stopPropagation();
  }

  const handleClickOutside = () => {
    setOptionsVisible(false);
  };

  const optionsRef = useOutsideClick(handleClickOutside);

  const selectMarkup = 
    <div
      className={`${prefix}--select`}
    >
      <label>{label} {mandatory ? '*' : ''}</label>
      <div 
        className='selected-option'
        onClick={toggleOptions}
      >
        {selectedOption 
          ? <span className="option">{selectedOption.label}</span>
          : <span className="placeholder">{placeholder}</span>
        }
        <img
            id='chevron'
            src="https://res.cloudinary.com/vallourec-group/image/upload/v1651069461/e-commerce_app_assets/icons/chevron_right_blue.svg" 
            alt="chevron" 
        />
      </div>
      <div
        className={`options ${optionsVisible ? 'visible' : 'hidden'}`}
        ref={optionsRef}
      >
        {options?.map(option => renderOption(option))}
      </div>
    </div>
  ;

  return selectMarkup
}

const getSelectedOption = options => {
  return options?.find(option => option.selected);
}