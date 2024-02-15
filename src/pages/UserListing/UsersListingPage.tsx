import { Stack, Box, Typography, CircularProgress } from '@mui/material';
import { UsersListingPageWrapper } from './UsersListingPage.styled';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IPagination } from '../../types/pagination';
import { CustomTable } from '../../components/table/CustomTable';
import { useTranslation } from 'react-i18next';
import users from '../../data/sampleUsers.json';
import { IUser } from '../../api/types/users';
import useGetUsersTableColumns from './useGetUsersTableColumns';

interface IAllUsers {
    count: number;
    data: IUser[];
}

export const UsersListingPage = () => {
    //Mock data
    const mockData = {
        count: 20,
        data: users,
    };
    const { t } = useTranslation('usersList');
    const [searchParams, setSearchParams] = useSearchParams({ page: '1' });

    const updateSearchParams = (newPage: string) => {
        searchParams.set('page', String(newPage));
        setSearchParams(searchParams);
    };
    const columns = useGetUsersTableColumns();

    const [pageState, setPageState] = useState<IPagination<IUser>>({
        loading: true,
        page: Number(searchParams.get('page')) - 1 || 0,
        pageSize: 10,
        totalNumberOfData: 0,
        data: [],
    });

    const updatePageState = (newPageState: Partial<IPagination<IUser>>) => {
        setPageState((prev) => ({ ...prev, ...newPageState }));
    };

    // Function to mimic API call
    const getAllUsers = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const pageNumber = searchParams.get('page');
                resolve({
                    count: mockData.count,
                    data: mockData.data.slice(
                        (Number(pageNumber) - 1) * 10,
                        Number(pageNumber) * 10
                    ),
                });
            }, 2000);
        });
    };

    useEffect(() => {
        //Fething data
        const getBookings = async () => {
            try {
                setPageState((prev) => ({ ...prev, loading: true }));
                const allUsersResponse = (await getAllUsers()) as IAllUsers;
                setPageState((prev) => ({
                    ...prev,
                    totalNumberOfData: allUsersResponse.count,
                    data: allUsersResponse.data,
                }));
            } catch (error) {
                console.error(error);
            } finally {
                setPageState((prev) => ({ ...prev, loading: false }));
            }
        };
        void getBookings();
    }, [searchParams]);

    return (
        <UsersListingPageWrapper>
            <Stack direction={'row'} spacing={5}>
                <Box
                    component="div"
                    className="boxes"
                    boxShadow={3}
                    borderRadius={2}
                >
                    <Stack direction={'column'} className="box-col">
                        <Typography
                            variant="body2"
                            className="title"
                            textAlign={'left'}
                        >
                            {t('totalUsers')}
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
                <Box
                    component="div"
                    className="boxes"
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
                            124
                        </Typography>
                    </Stack>
                </Box>
            </Stack>
            <CustomTable
                pageState={pageState}
                updatePageState={updatePageState}
                updateSearchParams={updateSearchParams}
                columns={columns}
                rowId={'email'}
                languageNamespace={'usersList'}
            />
        </UsersListingPageWrapper>
    );
};
