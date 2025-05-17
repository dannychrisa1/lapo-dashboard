import { IconProps } from "../../datatypes"

const LogoutIcon = ({ color = "#000000", className = "" }: IconProps) => {
    return (
        <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.33325 2L6.89155 2.1559C5.17237 2.76267 4.31278 3.06605 3.82301 3.75828C3.33325 4.45051 3.33325 5.36206 3.33325 7.18518V8.81482C3.33325 10.6379 3.33325 11.5495 3.82301 12.2417C4.31278 12.934 5.17237 13.2373 6.89155 13.8441L7.33325 14" stroke={color} stroke-linecap="round" />
            <path d="M13.9999 8.00016L7.33325 8.00016M13.9999 8.00016C13.9999 7.53334 12.6704 6.66118 12.3333 6.3335M13.9999 8.00016C13.9999 8.46698 12.6704 9.33914 12.3333 9.66683" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

export default LogoutIcon