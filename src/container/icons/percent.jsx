export default function Percent({color = "white", size = 24}) {
    return (
        <svg width={size} height={size} viewBox={`0 0 24 25`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame">
                <path id="Vector" d="M17 19.8096C15.8954 19.8096 15 18.9142 15 17.8096C15 16.705 15.8954 15.8096 17 15.8096C18.1046 15.8096 19 16.705 19 17.8096C19 18.9142 18.1046 19.8096 17 19.8096Z"
                      stroke={color}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                />
                <path id="Vector_2" d="M7 9.80957C5.89543 9.80957 5 8.91414 5 7.80957C5 6.705 5.89543 5.80957 7 5.80957C8.10457 5.80957 9 6.705 9 7.80957C9 8.91414 8.10457 9.80957 7 9.80957Z"
                      stroke={color}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                />
                <path id="Vector_3" d="M19 5.80957L5 19.8096"
                      stroke={color}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                />
            </g>
        </svg>
    );
}

