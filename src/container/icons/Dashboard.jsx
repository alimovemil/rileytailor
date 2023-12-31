export default function Dashboard({color = "white", size = 20}) {
    return (
        <svg width={size} height={size} viewBox={`0 0 20 20`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="&#208;&#180;&#208;&#176;&#209;&#136;">
                <path id="Vector"
                      d="M8.125 8.125V17.5M2.5 8.125H17.5M3 2.5H17C17.1326 2.5 17.2598 2.55268 17.3536 2.64645C17.4473 2.74021 17.5 2.86739 17.5 3V17C17.5 17.1326 17.4473 17.2598 17.3536 17.3536C17.2598 17.4473 17.1326 17.5 17 17.5H3C2.86739 17.5 2.74021 17.4473 2.64645 17.3536C2.55268 17.2598 2.5 17.1326 2.5 17V3C2.5 2.86739 2.55268 2.74021 2.64645 2.64645C2.74021 2.55268 2.86739 2.5 3 2.5Z"
                      stroke={color}
                      strokeWidth="1.5"
                />
            </g>
        </svg>
    );
}
