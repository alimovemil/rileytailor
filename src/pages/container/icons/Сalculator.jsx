export default function Calculator({color = "white", size = 24}) {
    return (
        <svg width={size} height={size} viewBox={`0 0 24 24`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame">
                <g id="Group 11">
                    <path id="Vector" d="M13.9922 17H16.9922M19.9922 17H16.9922M16.9922 17V14M16.9922 17V20"
                          stroke={color}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                    />
                    <path id="Vector_2"
                          d="M4 9.4V4.6C4 4.26863 4.26863 4 4.6 4H9.4C9.73137 4 10 4.26863 10 4.6V9.4C10 9.73137 9.73137 10 9.4 10H4.6C4.26863 10 4 9.73137 4 9.4Z"
                          stroke={color}
                          strokeWidth="1.5"
                    />
                    <path id="Vector_3"
                          d="M4 19.4V14.6C4 14.2686 4.26863 14 4.6 14H9.4C9.73137 14 10 14.2686 10 14.6V19.4C10 19.7314 9.73137 20 9.4 20H4.6C4.26863 20 4 19.7314 4 19.4Z"
                          stroke={color}
                          strokeWidth="1.5"
                    />
                    <path id="Vector_4"
                          d="M14 9.4V4.6C14 4.26863 14.2686 4 14.6 4H19.4C19.7314 4 20 4.26863 20 4.6V9.4C20 9.73137 19.7314 10 19.4 10H14.6C14.2686 10 14 9.73137 14 9.4Z"
                          stroke={color}
                          strokeWidth="1.5"
                    />
                </g>
            </g>
        </svg>
    );
}



