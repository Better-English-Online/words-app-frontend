const Dict = ({ height, fill, ...props }) => {
    return (
        <svg
            height={height}
            fill={fill}
            id="Layer_1"
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <title>folder, file, archive, document, office</title>
            <path d="M21,5H11.72l-.32-1A3,3,0,0,0,8.56,2H3A3,3,0,0,0,0,5V19a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V8A3,3,0,0,0,21,5Zm1,14a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V5A1,1,0,0,1,3,4H8.56a1,1,0,0,1,.95.68L10.28,7H21a1,1,0,0,1,1,1Z" />
        </svg>
    );
};

export default Dict;
