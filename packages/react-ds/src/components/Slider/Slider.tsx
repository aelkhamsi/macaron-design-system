import { Fragment } from 'react';
import './slider.scss';
import { usePrefix } from '../../hooks/usePrefix';

interface SliderProps {
  /** Label for the input */
  label?: string;

  /** Name of the input */
  name?: string;

  /** ID for the input */
  id?: string;

  /** The initial value of checked prop of checkbox */
  checked?: string;

  /** Callback when changed */
  onChange?(): void;
}
export const Slider = ({
  name,
  id,
  label,
  onChange,
}: SliderProps) => {
  const prefix = usePrefix();

  const sliderMarkup = 
    <div className={`${prefix}--slider`}>
      <label className="toggler-wrapper">
        <input type="checkbox" name={name} id={id} onChange={onChange} />
        <div className="toggler-slider">
          <div className="toggler-knob"></div>
        </div>
      </label>
      <div className='label'>{label}</div>
    </div>
  ;

  return sliderMarkup;
}