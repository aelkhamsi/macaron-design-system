import { IconProps } from '../../interfaces/icon-props.interface'

export const redDotIcon = (props: IconProps) => {
    return (
        <svg        
            {...props}
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="50" cy="50" r="50" fill="#8a0303"/>
        </svg>
    )
}
