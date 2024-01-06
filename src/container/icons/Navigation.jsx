export default function Navigation({color = "white", width = 15, height = 14}) {
    return (
        <svg width={width} height={height} viewBox={`0 0 15 14`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame">
                <path id="Vector" d="M2.25 2.9165H12.75M2.25 6.99984H12.75M2.25 11.0832H12.75"
                      stroke={color}
                      strokeOpacity="0.3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                />
            </g>
        </svg>
    );
}
