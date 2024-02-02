import { TextField, Stack, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import { Wrapper, CenteredButton } from './PnrSearch.styled';

export default function PnrSearch() {
    const searchPnrHandler = () => {
        // handler function
    };

    return (
        <Wrapper>
            <Stack spacing={5} direction="row">
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
            <CenteredButton
                variant="contained"
                onClick={searchPnrHandler}
                sx={{ mt: 2 }}
                startIcon={<Search />}
            >
                Find my ticket
            </CenteredButton>
        </Wrapper>
    );
}
