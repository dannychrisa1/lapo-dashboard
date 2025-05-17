import { IconProps } from "../../datatypes"

const CardsIcon = ({ color = "#000000", className = "" }: IconProps) => {
    return (
        <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.99992 13.3333H8.99992C11.5056 13.3333 12.7585 13.3333 13.5949 12.6728C13.7287 12.5671 13.8525 12.4506 13.9647 12.3247C14.6666 11.5375 14.6666 10.3583 14.6666 8C14.6666 7.21125 14.6666 6.5544 14.6403 6H1.35951C1.33325 6.5544 1.33325 7.21125 1.33325 8C1.33325 10.3583 1.33325 11.5375 2.03512 12.3247C2.14738 12.4506 2.2711 12.5671 2.40489 12.6728C3.24134 13.3333 4.4942 13.3333 6.99992 13.3333Z" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1.33325 7.99984C1.33325 5.64151 1.33325 4.46235 2.03512 3.6751C2.14738 3.54919 2.2711 3.43274 2.40489 3.32708C3.24134 2.6665 4.4942 2.6665 6.99992 2.6665H8.99992C11.5056 2.6665 12.7585 2.6665 13.5949 3.32708C13.7287 3.43274 13.8525 3.54919 13.9647 3.6751C14.6666 4.46235 14.6666 5.64151 14.6666 7.99984C14.6666 10.3582 14.6666 11.5373 13.9647 12.3246C13.8525 12.4505 13.7287 12.5669 13.5949 12.6726C12.7585 13.3332 11.5056 13.3332 8.99992 13.3332H6.99992C4.4942 13.3332 3.24134 13.3332 2.40489 12.6726C2.2711 12.5669 2.14738 12.4505 2.03512 12.3246C1.33325 11.5373 1.33325 10.3582 1.33325 7.99984Z" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.6665 10.6665H7.6665" stroke={color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.6665 10.6665L11.9998 10.6665" stroke={color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1.33325 6H14.6666" stroke={color} stroke-linejoin="round" />
        </svg>

    )
}

export default CardsIcon