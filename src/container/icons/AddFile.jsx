export default function AddFile({color = "white", width = 24, height = 24}) {
    return (
        <svg width={width} height={height} viewBox={`0 0 25 24`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame">
                <path id="Vector" d="M9.5 12H12.5M12.5 12H15.5M12.5 12V9M12.5 12V15M4.5 21.4V2.6C4.5 2.44087 4.56321 2.28826 4.67574 2.17574C4.78826 2.06321 4.94087 2 5.1 2H16.752C16.9111 2.00014 17.0636 2.06345 17.176 2.176L20.324 5.324C20.38 5.3799 20.4243 5.44632 20.4545 5.51943C20.4847 5.59254 20.5002 5.6709 20.5 5.75V21.4C20.5 21.4788 20.4845 21.5568 20.4543 21.6296C20.4242 21.7024 20.38 21.7685 20.3243 21.8243C20.2685 21.88 20.2024 21.9242 20.1296 21.9543C20.0568 21.9845 19.9788 22 19.9 22H5.1C5.02121 22 4.94319 21.9845 4.87039 21.9543C4.79759 21.9242 4.73145 21.88 4.67574 21.8243C4.62002 21.7685 4.57583 21.7024 4.54567 21.6296C4.51552 21.5568 4.5 21.4788 4.5 21.4Z"
                      stroke={color}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                />
                <path id="Vector_2" d="M16.5 2V5.4C16.5 5.55913 16.5632 5.71174 16.6757 5.82426C16.7883 5.93679 16.9409 6 17.1 6H20.5"
                      stroke={color}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                />
            </g>
        </svg>
    );
}

