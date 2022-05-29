const LogIn = ({ fill, height }) => {
    return (
        <svg
            height={height}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            stroke={fill}
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
            <polyline points="10 17 15 12 10 7"></polyline>
            <line x1="15" y1="12" x2="3" y2="12"></line>
        </svg>
    );
};

export default LogIn;
