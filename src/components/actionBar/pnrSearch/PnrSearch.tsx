import { TextField, Stack, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import { Wrapper, CenteredButton } from './PnrSearch.styled';
import { useTranslation } from 'react-i18next';
import { paths } from '../../../config';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function PnrSearch() {
    const { t } = useTranslation('pnrSearch');

    const navigate = useNavigate();

    const [pnrValue, setPnrValue] = useState<string>('');

    const searchPnrHandler = () => {
        navigate(`${paths.bookingSucess}?pnr=${pnrValue}`);
    };

    return (
        <Wrapper>
            <Stack spacing={5} direction="row">
                <TextField
                    label={t('searchForTicketByPNR')}
                    value={pnrValue}
                    onChange={(e) => {
                        setPnrValue(e.target.value);
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        ),
                    }}
                    fullWidth
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
