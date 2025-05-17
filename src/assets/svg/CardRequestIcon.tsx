import { IconProps } from "../../datatypes"

const CardRequestIcon = ({ color = "#000000", className = "" }: IconProps) => {
    return (
        <svg className={className} width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.33325 11.3332H6.99992C4.4942 11.3332 3.24134 11.3332 2.40489 10.6726C2.2711 10.5669 2.14738 10.4505 2.03512 10.3246C1.33325 9.53732 1.33325 8.35816 1.33325 5.99984C1.33325 3.64151 1.33325 2.46235 2.03512 1.6751C2.14738 1.54919 2.2711 1.43274 2.40489 1.32708C3.24134 0.666504 4.4942 0.666504 6.99992 0.666504H8.99992C11.5056 0.666504 12.7585 0.666504 13.5949 1.32708C13.7287 1.43274 13.8525 1.54919 13.9647 1.6751C14.5971 2.3844 14.6597 3.41183 14.6659 5.33317" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1.33325 4H14.6666" stroke={color} stroke-linejoin="round" />
            <path d="M9.33325 9.99967C9.33325 9.99967 9.99992 9.99967 10.6666 11.333C10.6666 11.333 12.7842 7.99967 14.6666 7.33301" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

export default CardRequestIcon