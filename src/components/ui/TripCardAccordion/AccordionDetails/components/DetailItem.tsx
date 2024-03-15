import { Stack, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

interface IDetailsItemProps {
    title: string;
    value: string;
    icon: JSX.Element;
}
export const DetailsItem = ({ title, value, icon }: IDetailsItemProps) => {
    const { breakpointValues } = useTheme();
    const isMinWidth = useMediaQuery(
        `(min-width:${breakpointValues.extraSmall})`
    );

    return (
        <Stack
            direction={!isMinWidth ? 'column' : 'row'}
            gap={isMinWidth ? '2rem' : '0.5rem'}
        >
            <Stack
                direction={'row'}
                gap={isMinWidth ? '2rem' : '1rem'}
                className="title-container"
            >
                {icon}
                {title && (
                    <Typography variant="body2" className="title">
                        {title}:
                    </Typography>
                )}
            </Stack>
            {value && (
                <Typography variant="body2" className="value">
                    {value}
                </Typography>
            )}
        </Stack>
    );
};
