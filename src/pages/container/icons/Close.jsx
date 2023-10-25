export default function Close({color= "white", width=24, height= 25, opacity = '0.3'}) {
    return (
        <svg width={width} height={height} viewBox={`0 0 24 25`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity={opacity}>
                <path
                    d="M6.75781 17.7438L12.0008 12.5008L17.2438 17.7438M17.2438 7.25781L11.9998 12.5008L6.75781 7.25781"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
}


