import { GlobalStyles } from '@mui/material';

export const GlobalStyle = () => (
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
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            },
        })}
    />
);
