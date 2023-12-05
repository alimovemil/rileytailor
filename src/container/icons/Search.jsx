export default function Search({color = "white", size = 24}) {
    return (
        <svg width={size} height={size} viewBox={`0 0 24 24`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame">
                <path id="Vector" d="M15.5 15.5L19 19"
                      stroke={color}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                />
                <path id="Vector_2"
                      d="M5 11C5 14.3137 7.68629 17 11 17C12.6597 17 14.1621 16.3261 15.2483 15.237C16.3308 14.1517 17 12.654 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z"
                      stroke={color}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                />
            </g>
        </svg>

    );
}


