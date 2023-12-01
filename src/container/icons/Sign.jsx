export default function Sign({color = "white", size = 24}) {
    return (
        <svg width={size} height={size} viewBox={`0 0 24 24`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame">
                <path id="Vector" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
                      stroke={color}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                />
                <path id="Vector_2" d="M4.27148 18.3457C4.27148 18.3457 6.5005 15.5 12.0005 15.5C17.5005 15.5 19.7296 18.3457 19.7296 18.3457"
                      stroke={color}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                />
                <path id="Vector_3" d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                      stroke={color}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                />
            </g>
        </svg>

    );
}

