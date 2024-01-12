export default function UnLoading({color = "white", width = 24, height = 24}) {
    return (
        <svg width={width} height={height} viewBox={`0 0 25 24`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame">
                <path id="Vector" d="M6.5 18H18.5M12.5 6V14M12.5 14L16 10.5M12.5 14L9 10.5"
                      stroke={color}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                />
                <path id="Vector_2" d="M3.5 20.4V3.6C3.5 3.44087 3.56321 3.28826 3.67574 3.17574C3.78826 3.06321 3.94087 3 4.1 3H20.9C21.0591 3 21.2117 3.06321 21.3243 3.17574C21.4368 3.28826 21.5 3.44087 21.5 3.6V20.4C21.5 20.5591 21.4368 20.7117 21.3243 20.8243C21.2117 20.9368 21.0591 21 20.9 21H4.1C3.94087 21 3.78826 20.9368 3.67574 20.8243C3.56321 20.7117 3.5 20.5591 3.5 20.4Z"
                      stroke={color}
                      strokeWidth="1.5"
                />
            </g>
        </svg>
    );
}


