export default function ArrowRight({ color = "white", size = 20,}) {
    return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame">
                <path id="Vector" d="M7.5 5L12.5 10L7.5 15"
                      stroke={color}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                />
            </g>
        </svg>
    );
}