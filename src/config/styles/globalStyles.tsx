import { useTheme } from '@emotion/react';
import { GlobalStyles } from '@mui/material';

export const GlobalStyle = () => {
    const theme = useTheme();
    return (
        <GlobalStyles
            styles={() => ({
                html: {
                    height: '100%',
                    fontSize: '10px',
                },
                body: {
                    height: '100%',
                    boxSizing: 'border-box',
                },
                '#root': {
                    minHeight: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                },
                h1: {
                    fontSize: theme.font.h1,
                },
                h2: {
                    fontSize: theme.font.h2,
                },
                h3: {
                    fontSize: theme.font.h3,
                },
            })}
        />
    );
};
