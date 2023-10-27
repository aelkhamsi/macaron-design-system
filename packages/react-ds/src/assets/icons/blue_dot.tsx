import { IconProps } from '../../interfaces/icon-props.interface'

export const blueDotIcon = (props: IconProps) => {
    return (
        <svg        
            {...props}
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="50" cy="50" r="50" fill="#172983"/>
        </svg>
    )
}
