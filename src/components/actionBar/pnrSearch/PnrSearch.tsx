import { TextField, Stack, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import { Wrapper, CenteredButton } from './PnrSearch.styled';
import { useTranslation } from 'react-i18next';

export default function PnrSearch() {
    const { t } = useTranslation('pnrSearch');

    const searchPnrHandler = async () => {
        // handler function
    };

    return (
        <Wrapper>
            <Stack spacing={5} direction="row">
                <TextField
                    label={t('searchForTicketByPNR')}
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
                {t('findMyTicket')}
            </CenteredButton>
        </Wrapper>
    );
}
