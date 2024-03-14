import { Stack, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

interface IDetailsItemProps {
    title: string;
    value: string;
    icon: JSX.Element
}
export const DetailsItem = ({ title, value, icon }: IDetailsItemProps) => {
    const { breakpointValues } = useTheme();
    const isMinWidth = useMediaQuery(`(min-width:${breakpointValues.small})`);

    return (
        <Stack direction={'row'} gap={'2rem'}>
            <Stack direction={'row'} spacing={1} className="title-container">
                {icon}
                {isMinWidth
                    ? title && (
                          <Typography variant="body2" className="title">
                              {title}:
                          </Typography>
                      )
                    : ''}
            </Stack>
            {value && (
                <Typography variant="body2" className="value">
                    {value}
                </Typography>
            )}
        </Stack>
    );
};
