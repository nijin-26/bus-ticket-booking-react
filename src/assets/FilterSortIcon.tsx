import { useTheme } from '@emotion/react';

export default function FilterSortIcon() {
    const { color } = useTheme();
    return (
        <svg
            width="3rem"
            height="3rem"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.5 1H1.03886C1.0226 1 1.01313 1.01839 1.02259 1.03162L5.99627 7.99478C5.9987 7.99818 6 8.00224 6 8.00641V14.4573C6 14.4743 6.01978 14.4835 6.0328 14.4727L8.9928 12.006C8.99736 12.0022 9 11.9966 9 11.9906V8.00667C9 8.00234 9.0014 7.99813 9.004 7.99467L10.5 6M10.5 1C9.5 2.5 8 4.5 8 4.5M10.5 1C10.5 6.27208 10.5 9.22792 10.5 14.5M12 1V14.4517C12 14.4695 12.0215 14.4785 12.0341 14.4659L14.5 12"
                stroke={color.background}
                strokeLinecap="round"
            />
        </svg>
    );
}
