import { TextField, Stack, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import { Wrapper, CenteredButton, Overlay } from './PnrSearch.styled';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Ticket } from '../../../pages/Ticket/Ticket';
import { useSearchParams } from 'react-router-dom';

export default function PnrSearch() {
    const { t } = useTranslation('pnrSearch');

    const [searchParams, setSearchParams] = useSearchParams();
    const getPnrBySearch = searchParams.get('pnr')??'';
    const [pnrValue, setPnrValue] = useState<string>(getPnrBySearch);
    const [showTicket, setShowTicket] = useState<boolean>(false);

    const searchPnrHandler = () => {
        setSearchParams({ pnr: pnrValue });
        setShowTicket(true);
    };

    return (
        <>
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
                    disabled={pnrValue==''}
                >
                    {t('findMyTicket')}
                </CenteredButton>
            </Wrapper>
            {showTicket && (
                <Overlay onClick={()=>{setShowTicket(false)}}>
                    <div className="centered-ticket-container">
                        <Ticket />
                    </div>
                </Overlay>
            )}
        </>
    );
}
