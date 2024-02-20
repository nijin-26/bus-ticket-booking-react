import { Stack, Box, Typography, CircularProgress } from '@mui/material';
import { ListingPageWrapper } from './AllBookingsPage.styled';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IPagination } from '../../types/pagination';
import { CustomTable } from '../../components/table/CustomTable';
import { useTranslation } from 'react-i18next';
import useGetBookingsTableColumns from './useGetBookingsTableColumns';
import { getAllBookings } from '../../api/endpoints/ticket.api';
import { ITicket } from '../../types';

export const AllBookingsPage = () => {
    const { t } = useTranslation('bookingsList');
    const [searchParams, setSearchParams] = useSearchParams({ page: '1' });
    const columns = useGetBookingsTableColumns();
    const updateSearchParams = (newPage: string) => {
        searchParams.set('page', String(newPage));
        setSearchParams(searchParams);
    };

    const [pageState, setPageState] = useState<IPagination<ITicket>>({
        loading: true,
        page: Number(searchParams.get('page')) - 1 || 0,
        pageSize: 10,
        totalNumberOfData: 0,
        data: [],
    });

    const updatePageState = (newPageState: Partial<IPagination<ITicket>>) => {
        setPageState((prev) => ({ ...prev, ...newPageState }));
    };

    useEffect(() => {
        //Fething data
        void (async () => {
            try {
                setPageState((prev) => ({ ...prev, loading: true }));
                const ticketsResponse = await getAllBookings();
                setPageState((prev) => ({
                    ...prev,
                    data: ticketsResponse,
                    totalNumberOfData: ticketsResponse.length,
                }));
            } catch (error) {
                console.error(error);
            } finally {
                setPageState((prev) => ({ ...prev, loading: false }));
            }
        })();
    }, []);

    return (
        <ListingPageWrapper>
            <Stack
                sx={{ mt: '3rem', mb: '3rem' }}
                direction={'row'}
                spacing={5}
            >
                <Box component="div" className="boxes">
                    <h2>{t('bookingsList')}</h2>
                </Box>
                <Box
                    component="div"
                    className="boxes box-bg"
                    boxShadow={3}
                    borderRadius={2}
                >
                    <Stack direction={'column'} className="box-col">
                        <Typography
                            variant="body2"
                            className="title"
                            textAlign={'left'}
                        >
                            {t('totalBookings')}
                        </Typography>
                        <Typography
                            variant="body2"
                            className="value"
                            textAlign={'center'}
                        >
                            {pageState.loading ? (
                                <CircularProgress />
                            ) : (
                                pageState.totalNumberOfData
                            )}
                        </Typography>
                    </Stack>
                </Box>
            </Stack>
            <CustomTable
                pageState={pageState}
                updatePageState={updatePageState}
                updateSearchParams={updateSearchParams}
                columns={columns}
                rowId={'pnrNumber'}
                languageNamespace={'bookingsList'}
            />
        </ListingPageWrapper>
    );
};
