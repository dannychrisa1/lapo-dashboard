import { IconProps } from "../../datatypes"

const BranchIcon = ({ color = "#000000", className = "" }: IconProps) => {
    return (
        <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1.33301L4 1.33301C2.34533 1.33301 2 1.67834 2 3.33301L2 14.6663L10 14.6663L10 3.33301C10 1.67834 9.65467 1.33301 8 1.33301Z" stroke={color} stroke-linejoin="round" />
            <path d="M12 5.33301L10 5.33301L10 14.6663L14 14.6663L14 7.33301C14 5.67834 13.6547 5.33301 12 5.33301Z" stroke={color} stroke-linejoin="round" />
            <path d="M5.33325 4L6.66658 4M5.33325 6L6.66658 6M5.33325 8L6.66658 8" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.66659 14.6665L7.66659 11.9998C7.66659 11.3713 7.66659 11.057 7.47132 10.8618C7.27606 10.6665 6.96179 10.6665 6.33325 10.6665H5.66659C5.03805 10.6665 4.72378 10.6665 4.52851 10.8618C4.33325 11.057 4.33325 11.3713 4.33325 11.9998L4.33325 14.6665" stroke={color} stroke-linejoin="round" />
        </svg>

    )
}

export default BranchIcon