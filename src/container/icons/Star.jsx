export default function Star({color = "white", size = 24}) {
    return (
        <svg width={size} height={size} viewBox={`0 0 24 24`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="m8.471 8.135 2.553-5.14a.895.895 0 0 1 1.601 0l2.553 5.14 5.706.83a.886.886 0 0 1 .494 1.514l-4.128 4 .974 5.648c.125.725-.641 1.277-1.297.936l-5.102-2.669-5.104 2.669c-.655.342-1.42-.21-1.296-.937l.974-5.649-4.128-3.998a.886.886 0 0 1 .494-1.513l5.706-.83Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
            </path>
        </svg>
    );
}


