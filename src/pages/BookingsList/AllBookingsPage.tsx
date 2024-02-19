import { Stack, Box, Typography, CircularProgress } from '@mui/material';
import { ListingPageWrapper } from './AllBookingsPage.styled';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IPagination } from '../../types/pagination';
import { CustomTable } from '../../components/table/CustomTable';
import { useTranslation } from 'react-i18next';
import useGetBookingsTableColumns from './useGetBookingsTableColumns';
import { IBooking } from '../../types/bookingsList';

export const AllBookingsPage = () => {
    //Mock data
    const mockBookings = {
        count: 10,
        data: [
            {
                pnrNumber: '20bs1s',
                tripId: 2,
                origin: 'Trivandrum',
                destination: 'Bangalore',
                departureDate: '03-02-2024',
                departure: '09:15',
                arrival: '14:30',
                durationInHours: '3',
                busType: 'AC',
                seatType: 'SEMI-SLEEPER',
                passengers: [
                    {
                        seatNumber: '5',
                        passengerName: 'Charlie Brown',
                        passengerAge: 32,
                        passengerGender: 'male',
                        fare: '55.00',
                    },
                    {
                        seatNumber: '6',
                        passengerName: 'Daisy Johnson',
                        passengerAge: 28,
                        passengerGender: 'female',
                        fare: '55.00',
                    },
                ],
            },
            {
                pnrNumber: '20bs2s',
                tripId: 3,
                originId: 2,
                destinationId: 3,
                departure: '2024-02-04T11:45:00Z',
                arrival: '2024-02-04T17:00:00Z',
                durationInHours: '3',
                busType: 'AC',
                seatType: 'SLEEPER',
                passengers: [
                    {
                        seatNumber: '7',
                        passengerName: 'David Miller',
                        passengerAge: 40,
                        passengerGender: 'male',
                        fare: '60.00',
                    },
                    {
                        seatNumber: '8',
                        passengerName: 'Emily White',
                        passengerAge: 35,
                        passengerGender: 'female',
                        fare: '60.00',
                    },
                ],
            },
            {
                pnrNumber: '20bs3s',
                tripId: 4,
                originId: 3,
                destinationId: 4,
                departure: '2024-02-05T13:00:00Z',
                arrival: '2024-02-05T19:30:00Z',
                durationInHours: '3',
                busType: 'NON-AC',
                seatType: 'SEMI-SLEEPER',
                passengers: [
                    {
                        seatNumber: '9',
                        passengerName: 'Frank Johnson',
                        passengerAge: 22,
                        passengerGender: 'male',
                        fare: '45.00',
                    },
                    {
                        seatNumber: '10',
                        passengerName: 'Grace Davis',
                        passengerAge: 25,
                        passengerGender: 'female',
                        fare: '45.00',
                    },
                ],
            },
            {
                pnrNumber: '20bs4s',
                tripId: 5,
                originId: 4,
                destinationId: 5,
                departure: '2024-02-05T13:00:00Z',
                arrival: '2024-02-05T19:30:00Z',
                durationInHours: '3',
                busType: 'NON-AC',
                seatType: 'SEMI-SLEEPER',
                passengers: [
                    {
                        seatNumber: '9',
                        passengerName: 'Frank Johnson',
                        passengerAge: 22,
                        passengerGender: 'male',
                        fare: '45.00',
                    },
                    {
                        seatNumber: '10',
                        passengerName: 'Grace Davis',
                        passengerAge: 25,
                        passengerGender: 'female',
                        fare: '45.00',
                    },
                ],
            },
            {
                pnrNumber: '20bs5s',
                tripId: 6,
                originId: 5,
                destinationId: 6,
                departure: '2024-02-05T13:00:00Z',
                arrival: '2024-02-05T19:30:00Z',
                durationInHours: '3',
                busType: 'NON-AC',
                seatType: 'SEMI-SLEEPER',
                passengers: [
                    {
                        seatNumber: '9',
                        passengerName: 'Frank Johnson',
                        passengerAge: 22,
                        passengerGender: 'male',
                        fare: '45.00',
                    },
                    {
                        seatNumber: '10',
                        passengerName: 'Grace Davis',
                        passengerAge: 25,
                        passengerGender: 'female',
                        fare: '45.00',
                    },
                ],
            },
            {
                pnrNumber: '20bs6s',
                tripId: 7,
                originId: 6,
                destinationId: 7,
                departure: '2024-02-05T13:00:00Z',
                arrival: '2024-02-05T19:30:00Z',
                durationInHours: '3',
                busType: 'NON-AC',
                seatType: 'SEMI-SLEEPER',
                passengers: [
                    {
                        seatNumber: '9',
                        passengerName: 'Frank Johnson',
                        passengerAge: 22,
                        passengerGender: 'male',
                        fare: '45.00',
                    },
                    {
                        seatNumber: '10',
                        passengerName: 'Grace Davis',
                        passengerAge: 25,
                        passengerGender: 'female',
                        fare: '45.00',
                    },
                ],
            },
            {
                pnrNumber: '20bs7s',
                tripId: 8,
                originId: 7,
                destinationId: 8,
                departure: '2024-02-05T13:00:00Z',
                arrival: '2024-02-05T19:30:00Z',
                durationInHours: '3',
                busType: 'NON-AC',
                seatType: 'SEMI-SLEEPER',
                passengers: [
                    {
                        seatNumber: '9',
                        passengerName: 'Frank Johnson',
                        passengerAge: 22,
                        passengerGender: 'male',
                        fare: '45.00',
                    },
                    {
                        seatNumber: '10',
                        passengerName: 'Grace Davis',
                        passengerAge: 25,
                        passengerGender: 'female',
                        fare: '45.00',
                    },
                ],
            },
            {
                pnrNumber: '20bs8s',
                tripId: 9,
                originId: 8,
                destinationId: 9,
                departure: '2024-02-05T13:00:00Z',
                arrival: '2024-02-05T19:30:00Z',
                durationInHours: '3',
                busType: 'NON-AC',
                seatType: 'SEMI-SLEEPER',
                passengers: [
                    {
                        seatNumber: '9',
                        passengerName: 'Frank Johnson',
                        passengerAge: 22,
                        passengerGender: 'male',
                        fare: '45.00',
                    },
                    {
                        seatNumber: '10',
                        passengerName: 'Grace Davis',
                        passengerAge: 25,
                        passengerGender: 'female',
                        fare: '45.00',
                    },
                ],
            },
            {
                pnrNumber: '20bs9s',
                tripId: 10,
                originId: 9,
                destinationId: 10,
                departure: '2024-02-05T13:00:00Z',
                arrival: '2024-02-05T19:30:00Z',
                durationInHours: '3',
                busType: 'NON-AC',
                seatType: 'SEMI-SLEEPER',
                passengers: [
                    {
                        seatNumber: '9',
                        passengerName: 'Frank Johnson',
                        passengerAge: 22,
                        passengerGender: 'male',
                        fare: '45.00',
                    },
                    {
                        seatNumber: '10',
                        passengerName: 'Grace Davis',
                        passengerAge: 25,
                        passengerGender: 'female',
                        fare: '45.00',
                    },
                ],
            },
            {
                pnrNumber: '20bs10s',
                tripId: 11,
                originId: 10,
                destinationId: 11,
                departure: '2024-02-05T13:00:00Z',
                arrival: '2024-02-05T19:30:00Z',
                durationInHours: '3',
                busType: 'NON-AC',
                seatType: 'SEMI-SLEEPER',
                passengers: [
                    {
                        seatNumber: '9',
                        passengerName: 'Frank Johnson',
                        passengerAge: 22,
                        passengerGender: 'male',
                        fare: '45.00',
                    },
                    {
                        seatNumber: '10',
                        passengerName: 'Grace Davis',
                        passengerAge: 25,
                        passengerGender: 'female',
                        fare: '45.00',
                    },
                ],
            },
        ],
    };

    const { t } = useTranslation('bookingsList');
    const [searchParams, setSearchParams] = useSearchParams({ page: '1' });
    const columns = useGetBookingsTableColumns();
    const updateSearchParams = (newPage: string) => {
        searchParams.set('page', String(newPage));
        setSearchParams(searchParams);
    };

    const [pageState, setPageState] = useState<IPagination<IBooking>>({
        loading: true,
        page: Number(searchParams.get('page')) - 1 || 0,
        pageSize: 10,
        totalNumberOfData: 0,
        data: [],
    });

    const updatePageState = (newPageState: Partial<IPagination<IBooking>>) => {
        setPageState((prev) => ({ ...prev, ...newPageState }));
    };

    // Function to mimic API call

    useEffect(() => {
        const getAllBookings = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const pageNumber = searchParams.get('page');
                    resolve({
                        count: mockBookings.count,
                        data: mockBookings.data.slice(
                            (Number(pageNumber) - 1) * 10,
                            Number(pageNumber) * 10
                        ),
                    });
                }, 2000);
            });
        };
        //Fething data
        const getBookings = async () => {
            try {
                setPageState((prev) => ({ ...prev, loading: true }));
                const bookingsResponse = (await getAllBookings()) as {
                    count: number;
                    data: IBooking[];
                };
                setPageState((prev) => ({
                    ...prev,
                    totalNumberOfData: bookingsResponse.count,
                    data: bookingsResponse.data,
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
        <ListingPageWrapper>
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
                            124
                        </Typography>
                    </Stack>
                </Box>
                <Box
                    component="div"
                    className="boxes"
                    boxShadow={3}
                    borderRadius={2}
                >
                    {' '}
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
            <h2>{t('bookingsList')}</h2>
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
