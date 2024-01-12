export default function Calendar({color= "white", size = 20}) {
    return (
        <svg width={size} height={size} viewBox={`0 0 20 20`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0119C2.67559 16.6993 2.5 16.2754 2.5 15.8334V8.33335M2.5 8.33335H17.5M2.5 8.33335V5.00002C2.5 4.55799 2.67559 4.13407 2.98816 3.82151C3.30072 3.50895 3.72464 3.33335 4.16667 3.33335H5.83333M17.5 8.33335V10.8334M17.5 8.33335V5.00002C17.5 4.55799 17.3244 4.13407 17.0118 3.82151C16.6993 3.50895 16.2754 3.33335 15.8333 3.33335H15.4167M12.5 3.33335V1.66669M12.5 3.33335V5.00002M12.5 3.33335H8.75M5.83333 1.66669V5.00002M12.4933 15H14.9933M14.9933 15H17.5M14.9933 15V12.5M14.9933 15V17.5"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
