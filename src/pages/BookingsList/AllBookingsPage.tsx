import { Stack, Box, Typography, CircularProgress } from '@mui/material';
import { IBooking } from '../../api/types/bookings';
import { Gender } from '../../types/ticket';
import { AllBookingsPageWrapper } from './AllBookingsPage.styled';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IPagination } from '../../types/pagination';
import bookingsListTableColumns from './bookingsListConfig';
import { CustomTable } from '../../components/table/CustomTable';
import { useTranslation } from 'react-i18next';

export const AllBookingsPage = () => {
    //Mock data
    const mockBookings = {
        count: 23,
        data: [
            // Existing bookings...
            {
                pnrNumber: 'GHI789',
                tripId: 'A12CD',
                origin: 'Bangalore',
                destination: 'Hyderabad',
                departureTimestamp: '2024-02-03T09:15:00Z',
                arrivalTimestamp: '2024-02-03T14:30:00Z',
                seatType: 'SEMI-SLEEPER',
                busType: 'AC',
                farePerSeat: 55,
                seats: [
                    {
                        seatNumber: 5,
                        passenger: {
                            fullName: 'Charlie Brown',
                            age: 32,
                            gender: Gender.MALE,
                        },
                    },
                    {
                        seatNumber: 6,
                        passenger: {
                            fullName: 'Daisy Johnson',
                            age: 28,
                            gender: Gender.FEMALE,
                        },
                    },
                ],
            },
            {
                pnrNumber: 'JKL012',
                tripId: 'P34QR',
                origin: 'Hyderabad',
                destination: 'Chennai',
                departureTimestamp: '2024-02-04T11:45:00Z',
                arrivalTimestamp: '2024-02-04T17:00:00Z',
                seatType: 'SLEEPER',
                busType: 'AC',
                farePerSeat: 60,
                seats: [
                    {
                        seatNumber: 7,
                        passenger: {
                            fullName: 'David Miller',
                            age: 40,
                            gender: Gender.MALE,
                        },
                    },
                    {
                        seatNumber: 8,
                        passenger: {
                            fullName: 'Emily White',
                            age: 35,
                            gender: Gender.FEMALE,
                        },
                    },
                ],
            },
            {
                pnrNumber: 'MNO345',
                tripId: 'R56ST',
                origin: 'Chennai',
                destination: 'Mumbai',
                departureTimestamp: '2024-02-05T13:00:00Z',
                arrivalTimestamp: '2024-02-05T19:30:00Z',
                seatType: 'SEMI-SLEEPER',
                busType: 'NON-AC',
                farePerSeat: 45,
                seats: [
                    {
                        seatNumber: 9,
                        passenger: {
                            fullName: 'Frank Johnson',
                            age: 22,
                            gender: Gender.MALE,
                        },
                    },
                    {
                        seatNumber: 10,
                        passenger: {
                            fullName: 'Grace Davis',
                            age: 25,
                            gender: Gender.FEMALE,
                        },
                    },
                ],
            },
            {
                pnrNumber: 'MNO3451',
                tripId: 'R56ST',
                origin: 'Chennai',
                destination: 'Mumbai',
                departureTimestamp: '2024-02-05T13:00:00Z',
                arrivalTimestamp: '2024-02-05T19:30:00Z',
                seatType: 'SEMI-SLEEPER',
                busType: 'NON-AC',
                farePerSeat: 45,
                seats: [
                    {
                        seatNumber: 9,
                        passenger: {
                            fullName: 'Frank Johnson',
                            age: 22,
                            gender: Gender.MALE,
                        },
                    },
                    {
                        seatNumber: 10,
                        passenger: {
                            fullName: 'Grace Davis',
                            age: 25,
                            gender: Gender.FEMALE,
                        },
                    },
                ],
            },
            {
                pnrNumber: 'MNO3452',
                tripId: 'R56ST',
                origin: 'Chennai',
                destination: 'Mumbai',
                departureTimestamp: '2024-02-05T13:00:00Z',
                arrivalTimestamp: '2024-02-05T19:30:00Z',
                seatType: 'SEMI-SLEEPER',
                busType: 'NON-AC',
                farePerSeat: 45,
                seats: [
                    {
                        seatNumber: 9,
                        passenger: {
                            fullName: 'Frank Johnson',
                            age: 22,
                            gender: Gender.MALE,
                        },
                    },
                    {
                        seatNumber: 10,
                        passenger: {
                            fullName: 'Grace Davis',
                            age: 25,
                            gender: Gender.FEMALE,
                        },
                    },
                ],
            },
            {
                pnrNumber: 'MNO3453',
                tripId: 'R56ST',
                origin: 'Chennai',
                destination: 'Mumbai',
                departureTimestamp: '2024-02-05T13:00:00Z',
                arrivalTimestamp: '2024-02-05T19:30:00Z',
                seatType: 'SEMI-SLEEPER',
                busType: 'NON-AC',
                farePerSeat: 45,
                seats: [
                    {
                        seatNumber: 9,
                        passenger: {
                            fullName: 'Frank Johnson',
                            age: 22,
                            gender: Gender.MALE,
                        },
                    },
                    {
                        seatNumber: 10,
                        passenger: {
                            fullName: 'Grace Davis',
                            age: 25,
                            gender: Gender.FEMALE,
                        },
                    },
                ],
            },
            {
                pnrNumber: 'MNO3454',
                tripId: 'R56ST',
                origin: 'Chennai',
                destination: 'Mumbai',
                departureTimestamp: '2024-02-05T13:00:00Z',
                arrivalTimestamp: '2024-02-05T19:30:00Z',
                seatType: 'SEMI-SLEEPER',
                busType: 'NON-AC',
                farePerSeat: 45,
                seats: [
                    {
                        seatNumber: 9,
                        passenger: {
                            fullName: 'Frank Johnson',
                            age: 22,
                            gender: Gender.MALE,
                        },
                    },
                    {
                        seatNumber: 10,
                        passenger: {
                            fullName: 'Grace Davis',
                            age: 25,
                            gender: Gender.FEMALE,
                        },
                    },
                ],
            },
            {
                pnrNumber: 'MNO3455',
                tripId: 'R56ST',
                origin: 'Chennai',
                destination: 'Mumbai',
                departureTimestamp: '2024-02-05T13:00:00Z',
                arrivalTimestamp: '2024-02-05T19:30:00Z',
                seatType: 'SEMI-SLEEPER',
                busType: 'NON-AC',
                farePerSeat: 45,
                seats: [
                    {
                        seatNumber: 9,
                        passenger: {
                            fullName: 'Frank Johnson',
                            age: 22,
                            gender: Gender.MALE,
                        },
                    },
                    {
                        seatNumber: 10,
                        passenger: {
                            fullName: 'Grace Davis',
                            age: 25,
                            gender: Gender.FEMALE,
                        },
                    },
                ],
            },
            {
                pnrNumber: 'MNO3456',
                tripId: 'R56ST',
                origin: 'Chennai',
                destination: 'Mumbai',
                departureTimestamp: '2024-02-05T13:00:00Z',
                arrivalTimestamp: '2024-02-05T19:30:00Z',
                seatType: 'SEMI-SLEEPER',
                busType: 'NON-AC',
                farePerSeat: 45,
                seats: [
                    {
                        seatNumber: 9,
                        passenger: {
                            fullName: 'Frank Johnson',
                            age: 22,
                            gender: Gender.MALE,
                        },
                    },
                    {
                        seatNumber: 10,
                        passenger: {
                            fullName: 'Grace Davis',
                            age: 25,
                            gender: Gender.FEMALE,
                        },
                    },
                ],
            },
            {
                pnrNumber: 'MNO3457',
                tripId: 'R56ST',
                origin: 'Chennai',
                destination: 'Mumbai',
                departureTimestamp: '2024-02-05T13:00:00Z',
                arrivalTimestamp: '2024-02-05T19:30:00Z',
                seatType: 'SEMI-SLEEPER',
                busType: 'NON-AC',
                farePerSeat: 45,
                seats: [
                    {
                        seatNumber: 9,
                        passenger: {
                            fullName: 'Frank Johnson',
                            age: 22,
                            gender: Gender.MALE,
                        },
                    },
                    {
                        seatNumber: 10,
                        passenger: {
                            fullName: 'Grace Davis',
                            age: 25,
                            gender: Gender.FEMALE,
                        },
                    },
                ],
            },
            {
                pnrNumber: 'MNO3458',
                tripId: 'R56ST',
                origin: 'Chennai',
                destination: 'Mumbai',
                departureTimestamp: '2024-02-05T13:00:00Z',
                arrivalTimestamp: '2024-02-05T19:30:00Z',
                seatType: 'SEMI-SLEEPER',
                busType: 'NON-AC',
                farePerSeat: 45,
                seats: [
                    {
                        seatNumber: 9,
                        passenger: {
                            fullName: 'Frank Johnson',
                            age: 22,
                            gender: Gender.MALE,
                        },
                    },
                    {
                        seatNumber: 10,
                        passenger: {
                            fullName: 'Grace Davis',
                            age: 25,
                            gender: Gender.FEMALE,
                        },
                    },
                ],
            },
            {
                pnrNumber: 'MNO3459',
                tripId: 'R56ST',
                origin: 'Chennai',
                destination: 'Mumbai',
                departureTimestamp: '2024-02-05T13:00:00Z',
                arrivalTimestamp: '2024-02-05T19:30:00Z',
                seatType: 'SEMI-SLEEPER',
                busType: 'NON-AC',
                farePerSeat: 45,
                seats: [
                    {
                        seatNumber: 9,
                        passenger: {
                            fullName: 'Frank Johnson',
                            age: 22,
                            gender: Gender.MALE,
                        },
                    },
                    {
                        seatNumber: 10,
                        passenger: {
                            fullName: 'Grace Davis',
                            age: 25,
                            gender: Gender.FEMALE,
                        },
                    },
                ],
            },
            {
                pnrNumber: 'MNO3450',
                tripId: 'R56ST',
                origin: 'Chennai',
                destination: 'Mumbai',
                departureTimestamp: '2024-02-05T13:00:00Z',
                arrivalTimestamp: '2024-02-05T19:30:00Z',
                seatType: 'SEMI-SLEEPER',
                busType: 'NON-AC',
                farePerSeat: 45,
                seats: [
                    {
                        seatNumber: 9,
                        passenger: {
                            fullName: 'Frank Johnson',
                            age: 22,
                            gender: Gender.MALE,
                        },
                    },
                    {
                        seatNumber: 10,
                        passenger: {
                            fullName: 'Grace Davis',
                            age: 25,
                            gender: Gender.FEMALE,
                        },
                    },
                ],
            },
            {
                pnrNumber: 'MNO34511',
                tripId: 'R56ST',
                origin: 'Chennai',
                destination: 'Mumbai',
                departureTimestamp: '2024-02-05T13:00:00Z',
                arrivalTimestamp: '2024-02-05T19:30:00Z',
                seatType: 'SEMI-SLEEPER',
                busType: 'NON-AC',
                farePerSeat: 45,
                seats: [
                    {
                        seatNumber: 9,
                        passenger: {
                            fullName: 'Frank Johnson',
                            age: 22,
                            gender: Gender.MALE,
                        },
                    },
                    {
                        seatNumber: 10,
                        passenger: {
                            fullName: 'Grace Davis',
                            age: 25,
                            gender: Gender.FEMALE,
                        },
                    },
                ],
            },
            {
                pnrNumber: 'MNO34512',
                tripId: 'R56ST',
                origin: 'Chennai',
                destination: 'Mumbai',
                departureTimestamp: '2024-02-05T13:00:00Z',
                arrivalTimestamp: '2024-02-05T19:30:00Z',
                seatType: 'SEMI-SLEEPER',
                busType: 'NON-AC',
                farePerSeat: 45,
                seats: [
                    {
                        seatNumber: 9,
                        passenger: {
                            fullName: 'Frank Johnson',
                            age: 22,
                            gender: Gender.MALE,
                        },
                    },
                    {
                        seatNumber: 10,
                        passenger: {
                            fullName: 'Grace Davis',
                            age: 25,
                            gender: Gender.FEMALE,
                        },
                    },
                ],
            },
            {
                pnrNumber: 'MNO34513',
                tripId: 'R56ST',
                origin: 'Chennai',
                destination: 'Mumbai',
                departureTimestamp: '2024-02-05T13:00:00Z',
                arrivalTimestamp: '2024-02-05T19:30:00Z',
                seatType: 'SEMI-SLEEPER',
                busType: 'NON-AC',
                farePerSeat: 45,
                seats: [
                    {
                        seatNumber: 9,
                        passenger: {
                            fullName: 'Frank Johnson',
                            age: 22,
                            gender: Gender.MALE,
                        },
                    },
                    {
                        seatNumber: 10,
                        passenger: {
                            fullName: 'Grace Davis',
                            age: 25,
                            gender: Gender.FEMALE,
                        },
                    },
                ],
            },
            {
                pnrNumber: 'MNO34514',
                tripId: 'R56ST',
                origin: 'Chennai',
                destination: 'Mumbai',
                departureTimestamp: '2024-02-05T13:00:00Z',
                arrivalTimestamp: '2024-02-05T19:30:00Z',
                seatType: 'SEMI-SLEEPER',
                busType: 'NON-AC',
                farePerSeat: 45,
                seats: [
                    {
                        seatNumber: 9,
                        passenger: {
                            fullName: 'Frank Johnson',
                            age: 22,
                            gender: Gender.MALE,
                        },
                    },
                    {
                        seatNumber: 10,
                        passenger: {
                            fullName: 'Grace Davis',
                            age: 25,
                            gender: Gender.FEMALE,
                        },
                    },
                ],
            },
            {
                pnrNumber: 'MNO34515',
                tripId: 'R56ST',
                origin: 'Chennai',
                destination: 'Mumbai',
                departureTimestamp: '2024-02-05T13:00:00Z',
                arrivalTimestamp: '2024-02-05T19:30:00Z',
                seatType: 'SEMI-SLEEPER',
                busType: 'NON-AC',
                farePerSeat: 45,
                seats: [
                    {
                        seatNumber: 9,
                        passenger: {
                            fullName: 'Frank Johnson',
                            age: 22,
                            gender: Gender.MALE,
                        },
                    },
                    {
                        seatNumber: 10,
                        passenger: {
                            fullName: 'Grace Davis',
                            age: 25,
                            gender: Gender.FEMALE,
                        },
                    },
                ],
            },
            {
                pnrNumber: 'MNO34516',
                tripId: 'R56ST',
                origin: 'Chennai',
                destination: 'Mumbai',
                departureTimestamp: '2024-02-05T13:00:00Z',
                arrivalTimestamp: '2024-02-05T19:30:00Z',
                seatType: 'SEMI-SLEEPER',
                busType: 'NON-AC',
                farePerSeat: 45,
                seats: [
                    {
                        seatNumber: 9,
                        passenger: {
                            fullName: 'Frank Johnson',
                            age: 22,
                            gender: Gender.MALE,
                        },
                    },
                    {
                        seatNumber: 10,
                        passenger: {
                            fullName: 'Grace Davis',
                            age: 25,
                            gender: Gender.FEMALE,
                        },
                    },
                ],
            },
            {
                pnrNumber: 'MNO34517',
                tripId: 'R56ST',
                origin: 'Chennai',
                destination: 'Mumbai',
                departureTimestamp: '2024-02-05T13:00:00Z',
                arrivalTimestamp: '2024-02-05T19:30:00Z',
                seatType: 'SEMI-SLEEPER',
                busType: 'NON-AC',
                farePerSeat: 45,
                seats: [
                    {
                        seatNumber: 9,
                        passenger: {
                            fullName: 'Frank Johnson',
                            age: 22,
                            gender: Gender.MALE,
                        },
                    },
                    {
                        seatNumber: 10,
                        passenger: {
                            fullName: 'Grace Davis',
                            age: 25,
                            gender: Gender.FEMALE,
                        },
                    },
                ],
            },
            {
                pnrNumber: 'MNO34518',
                tripId: 'R56ST',
                origin: 'Chennai',
                destination: 'Mumbai',
                departureTimestamp: '2024-02-05T13:00:00Z',
                arrivalTimestamp: '2024-02-05T19:30:00Z',
                seatType: 'SEMI-SLEEPER',
                busType: 'NON-AC',
                farePerSeat: 45,
                seats: [
                    {
                        seatNumber: 9,
                        passenger: {
                            fullName: 'Frank Johnson',
                            age: 22,
                            gender: Gender.MALE,
                        },
                    },
                    {
                        seatNumber: 10,
                        passenger: {
                            fullName: 'Grace Davis',
                            age: 25,
                            gender: Gender.FEMALE,
                        },
                    },
                ],
            },
            {
                pnrNumber: 'MNO34519',
                tripId: 'R56ST',
                origin: 'Chennai',
                destination: 'Mumbai',
                departureTimestamp: '2024-02-05T13:00:00Z',
                arrivalTimestamp: '2024-02-05T19:30:00Z',
                seatType: 'SEMI-SLEEPER',
                busType: 'NON-AC',
                farePerSeat: 45,
                seats: [
                    {
                        seatNumber: 9,
                        passenger: {
                            fullName: 'Frank Johnson',
                            age: 22,
                            gender: Gender.MALE,
                        },
                    },
                    {
                        seatNumber: 10,
                        passenger: {
                            fullName: 'Grace Davis',
                            age: 25,
                            gender: Gender.FEMALE,
                        },
                    },
                ],
            },
            {
                pnrNumber: 'MNO34520',
                tripId: 'R56ST',
                origin: 'Chennai',
                destination: 'Mumbai',
                departureTimestamp: '2024-02-05T13:00:00Z',
                arrivalTimestamp: '2024-02-05T19:30:00Z',
                seatType: 'SEMI-SLEEPER',
                busType: 'NON-AC',
                farePerSeat: 45,
                seats: [
                    {
                        seatNumber: 9,
                        passenger: {
                            fullName: 'Frank Johnson',
                            age: 22,
                            gender: Gender.MALE,
                        },
                    },
                    {
                        seatNumber: 10,
                        passenger: {
                            fullName: 'Grace Davis',
                            age: 25,
                            gender: Gender.FEMALE,
                        },
                    },
                ],
            },
        ],
    };
    const { t } = useTranslation('bookingsList');
    const [searchParams, setSearchParams] = useSearchParams({ page: '1' });

    const updateSearchParams = (newPage: string) => {
        searchParams.set('page', String(newPage));
        setSearchParams(searchParams);
    };

    const [pageState, setPageState] = useState<IPagination>({
        loading: true,
        page: Number(searchParams.get('page')) - 1 || 0,
        pageSize: 10,
        totalNumberOfData: 0,
        data: [],
    });

    const updatePageState = (newPageState: Partial<IPagination>) => {
        setPageState((prev) => ({ ...prev, ...newPageState }));
    };

    // Function to mimic API call
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

    useEffect(() => {
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
        <AllBookingsPageWrapper>
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
            <CustomTable
                pageState={pageState}
                updatePageState={updatePageState}
                updateSearchParams={updateSearchParams}
                columns={bookingsListTableColumns}
                rowId={'pnrNumber'}
            />
        </AllBookingsPageWrapper>
    );
};
