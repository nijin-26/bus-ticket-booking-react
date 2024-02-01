import { TextField, Stack, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Search } from '@mui/icons-material';

export default function PnrSearch() {
    const searchPnrHandler = () => {
        // handler function
    };

    return (
        <>
            <Stack spacing={5} width="1200px" direction="row">
                <TextField
                    label="Search for your ticket by PNR number"
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>
            <LoadingButton
                variant="contained"
                onClick={searchPnrHandler}
                sx={{ mt: 2 }}
                startIcon={<Search />}
            >
                Find my ticket
            </LoadingButton>
        </>
    );
}
