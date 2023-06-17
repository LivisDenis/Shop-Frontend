export const Location = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width={12}
            height={14}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M6 .333C3.2.333.667 2.48.667 5.8c0 2.213 1.78 4.833 5.333 7.867 3.553-3.034 5.333-5.654 5.333-7.867C11.333 2.48 8.8.333 6 .333zM6 7c-.733 0-1.333-.6-1.333-1.333 0-.734.6-1.334 1.333-1.334s1.333.6 1.333 1.334C7.333 6.4 6.733 7 6 7z"
                fill="#fff"
            />
        </svg>
    );
}
