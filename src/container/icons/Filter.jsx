export default function Filter({color, size = 24,}) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame">
                <path id="Vector"
                      d="M3 7V4C3 3.44772 3.44772 3 4 3H20.0001C20.5523 3 21 3.44766 21.0001 3.9999L21.0004 7M3 7L9.6508 12.7007C9.87244 12.8907 10 13.168 10 13.4599V19.7192C10 20.3698 10.6114 20.8472 11.2425 20.6894L13.2425 20.1894C13.6877 20.0781 14 19.6781 14 19.2192V13.46C14 13.168 14.1275 12.8907 14.3492 12.7007L21.0004 7M3 7H21.0004"
                      stroke={color}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                />
            </g>
        </svg>
    );
}