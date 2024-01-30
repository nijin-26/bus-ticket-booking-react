import { useMemo, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { getDesignTokens, routesConfig } from './config';
import {
    CssBaseline,
    PaletteMode,
    ThemeProvider,
    createTheme,
} from '@mui/material';

const basename = '/';

const router = createBrowserRouter(routesConfig, {
    basename,
});

function App() {
    const [loading] = useState(false);
    const [mode] = useState<PaletteMode>('light'); // Replace with redux

    // Update the theme only if the mode changes
    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div>
                {loading ? (
                    <div>loading</div>
                ) : (
                    <RouterProvider router={router} />
                )}
            </div>
        </ThemeProvider>
    );
}

export default App;
