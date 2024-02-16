import { useCallback, useEffect, useState } from 'react';
import {
    ISortOrder,
    ITrip,
    ITripsQueryRequest,
    ITripsSortKey,
} from '../../api/types/trip';
import { TripCardAccordion } from '../../components';
import ActionBarDrawer from '../../components/actionBar/actionBarDrawer/ActionBarDrawer';
import ActionBarTab from '../../components/actionBar/actionBarTab/ActionBarTab';
import LoadMore from '../../components/loadMore/LoadMore';
import { ISeatType, IBusType, ITrip } from '../../types';
import { TripsListingPageWrapper } from './TripsListingPage.styled';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSearchParams } from 'react-router-dom';
import { getTrips } from '../../api';


export const TripsListingPage = () => {
    const [tripData, setTripData] = useState<ITrip[]>([]);
    const [resultLength, setResultLength] = useState<number>(0);
    const [searchParams] = useSearchParams();
    // setSearchParams({ page: '1' });
    console.log(searchParams);
    const fetchTripData = useCallback(async () => {
        const originId = searchParams.get('originId') ?? '8';
        const destinationId = searchParams.get('destinationId') ?? '9';
        const tripDate = searchParams.get('tripDate') ?? '2024-05-14';
        const sortByParam = searchParams.get('sortBy') as ITripsSortKey | null;
        const sortBy: ITripsSortKey =
            sortByParam ?? ITripsSortKey.DEPARTURE_TIMESTAMP;
        const sortOrderParam = searchParams.get(
            'sortOrder'
        ) as ISortOrder | null;
        const sortOrder: ISortOrder = sortOrderParam ?? ISortOrder.ASC;
        const page = searchParams.get('page') ?? '1';
        const pageSize = searchParams.get('pageSize') ?? '3';
        const passengerCount = searchParams.get('passengerCount') ?? '1';
        try {
            const params: ITripsQueryRequest = {
                originId: originId,
                destinationId: destinationId,
                tripDate: tripDate,
                sortBy: sortBy,
                sortOrder: sortOrder,
                page: Number(page),
                pageSize: Number(pageSize),
                passengerCount: Number(passengerCount),
            };
            const response = await getTrips(params);
            console.log('resposne', response);
            setTripData(response.trips);
            setResultLength(response.resultCount);
        } catch (error) {
            console.error('Error fetching trip data:', error);
        }
    }, [searchParams]);
    useEffect(() => {
        fetchTripData().catch((error) => {
            console.error('Error in useEffect:', error);
        });
    }, [fetchTripData, searchParams]);

    console.log(tripData);
    return (
        <TripsListingPageWrapper>
            {matches ? <ActionBarTab showFilterSort /> : <ActionBarDrawer />}
            {tripData.map((indData) => {
                // console.log('inddata', indData);
                return <TripCardAccordion key={indData.id} data={indData} />;
            })}
            {resultLength > 5 && <LoadMore />}
        </TripsListingPageWrapper>
    );
};
