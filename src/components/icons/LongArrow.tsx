import { useTheme } from '@emotion/react';

const LongArrow = ({ width, height }: { width: string; height: string }) => {
    const theme = useTheme();
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 39 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M38.8572 3L33.8572 0.113249V5.88675L38.8572 3ZM0.251953 3.5H34.3572V2.5H0.251953V3.5Z"
                fill={theme.color.textPrimary}
            />
        </svg>
    );
};

export default LongArrow;
