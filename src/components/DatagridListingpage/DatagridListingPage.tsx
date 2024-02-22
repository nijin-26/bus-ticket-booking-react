import { Stack, Box, Typography, CircularProgress } from '@mui/material';
import { DatagridListingPageWrapper } from './DatagridListingPage.styled';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IPagination } from '../../types/pagination';
import { GridColDef } from '@mui/x-data-grid';
import { TFunction } from 'i18next';
import { CustomTable } from './datagrid/CustomTable';

export const DatagridListingPage = <T,>({
    columns,
    t,
    getData,
    rowId,
}: {
    columns: GridColDef[];
    t: TFunction;
    getData: (page: string, pageSize: string) => Promise<T[]>;
    rowId: keyof T;
}) => {
    const [searchParams, setSearchParams] = useSearchParams({ page: '1' });
    const updateSearchParams = (newPage: string) => {
        searchParams.set('page', String(newPage));
        setSearchParams(searchParams);
    };

    const [pageState, setPageState] = useState<IPagination<T>>({
        loading: true,
        page: Number(searchParams.get('page')) - 1 || 0,
        pageSize: 10,
        totalNumberOfData: 0,
        data: [],
    });

    const updatePageState = (newPageState: Partial<IPagination<T>>) => {
        setPageState({ ...pageState, ...newPageState });
    };

    useEffect(() => {
        //Fething data
        void (async () => {
            updatePageState({ loading: true });
            try {
                const ticketsResponse = await getData(
                    searchParams.get('page') || '1',
                    String(pageState.pageSize)
                );
                updatePageState({
                    data: ticketsResponse,
                    totalNumberOfData: ticketsResponse.length,
                });
            } catch (error) {
                console.error(error);
            } finally {
                setPageState((prev) => ({ ...prev, loading: false }));
            }
        })();
    }, [getData, searchParams]);

    return (
        <DatagridListingPageWrapper>
            <Stack direction={'row'} spacing={5}>
                <Box component="div" className="boxes">
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{ lineHeight: '10rem' }}
                    >
                        {t('pageTitle')}
                    </Typography>
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
                            {t('cardTitle')}
                        </Typography>
                        <Typography
                            variant="body2"
                            className="value"
                            textAlign={'center'}
                        >
                            {pageState.loading &&
                            !pageState.totalNumberOfData ? (
                                <CircularProgress />
                            ) : (
                                pageState.totalNumberOfData
                            )}
                        </Typography>
                    </Stack>
                </Box>
            </Stack>
            <CustomTable<T>
                pageState={pageState}
                updatePageState={updatePageState}
                updateSearchParams={updateSearchParams}
                columns={columns}
                rowId={rowId}
                t={t}
            />
        </DatagridListingPageWrapper>
    );
};
