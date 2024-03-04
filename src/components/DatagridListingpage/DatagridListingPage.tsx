import { Stack, Box, Typography, CircularProgress } from '@mui/material';
import { DatagridListingPageWrapper } from './DatagridListingPage.styled';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { IPagination } from '../../types/pagination';
import { GridColDef } from '@mui/x-data-grid';
import { TFunction } from 'i18next';
import { CustomTable } from './datagrid/CustomTable';
import { IPaginatedData } from '../../api/types/pagination';
import { paths } from '../../config';

interface IDatagridListingPage<T> {
    columns: GridColDef[];
    t: TFunction;
    getData: (
        page: string,
        pageSize: string
    ) => Promise<T[]> | Promise<IPaginatedData<T>>;
    rowId: keyof T;
    frontendPagination: boolean;
}

export const DatagridListingPage = <T,>({
    columns,
    t,
    getData,
    rowId,
    frontendPagination,
}: IDatagridListingPage<T>) => {
    const currentLocation = useLocation();

    const pageTitle =
        currentLocation.pathname === paths.myBookings
            ? t('myBookingsPageTitle')
            : t('allBookingsPageTitle');

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

    const getListData = async () => {
        updatePageState({ loading: true });
        try {
            const ticketsResponse = await getData(
                searchParams.get('page') || '1',
                String(pageState.pageSize)
            );
            updatePageState(
                'data' in ticketsResponse
                    ? {
                          data: ticketsResponse.data,
                          totalNumberOfData: ticketsResponse.total,
                      }
                    : {
                          data: ticketsResponse,
                          totalNumberOfData: ticketsResponse.length,
                      }
            );
        } catch (error) {
            console.error(error);
        } finally {
            setPageState((prev) => ({ ...prev, loading: false }));
        }
    };

    useEffect(() => {
        void (async () => {
            await getListData();
        })();
    }, []);

    useEffect(() => {
        //Fething data
        if (!frontendPagination && pageState.data.length != 0) {
            void (async () => {
                await getListData();
            })();
        }
    }, [searchParams]);

    return (
        <DatagridListingPageWrapper>
            <Stack direction={'row'} spacing={5}>
                <Box component="div" className="boxes">
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{ lineHeight: '10rem' }}
                    >
                        {pageTitle}
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
                frontendPagination={frontendPagination}
            />
        </DatagridListingPageWrapper>
    );
};
