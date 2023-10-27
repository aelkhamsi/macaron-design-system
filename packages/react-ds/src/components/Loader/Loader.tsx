import classNames from "classnames";
import { usePrefix } from "../../hooks/usePrefix";
import { abbreviate}  from "../../utils/abbreviations";
import './loader.scss';

interface LoaderProps {
  /** The size of the loader */
  size?: 'small' | 'medium' | 'large';

  /** The type of the button, affecting color */
  type?: 'primary' | 'secondary'
}

export const Loader = ({
  size,
  type,
}: LoaderProps) => {
  const prefix = usePrefix()
  const loaderClasses = classNames(
    `${prefix}--loader`,
    `${prefix}--loader--${type}`,
    `${prefix}--loader--${abbreviate(size)}`,
  );

  const loaderMarkup = 
    <div className={loaderClasses}><div></div><div></div><div></div><div></div></div>
  
  return loaderMarkup;
}