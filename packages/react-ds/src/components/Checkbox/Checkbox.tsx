import classNames from "classnames";
import { usePrefix } from "../../hooks/usePrefix";
import './checkbox.scss';

interface CheckboxProps {
  /** Label for the input */
  label?: string;

  /** Name of the input */
  name?: string;

  /** ID for the input */
  id?: string;

  /** Callback when changed */
  onChange?(): void;
}

export const Checkbox = ({
  name,
  id,
  label,
  onChange,
}: CheckboxProps) => {
  const prefix = usePrefix();
  const checkboxClasses = classNames(`${prefix}--checkbox`);

  const checkboxMarkup = 
    <label className={checkboxClasses}>
      <input
        name={name}
        id={id}
        type="checkbox"
        onChange={onChange}
      />
      <span className='label'>{label}</span>
    </label>
  ;

  return checkboxMarkup
}