import { useEffect, useRef, useState } from 'react';
import {
    ISortOrder,
    ITripsQueryRequest,
    ITripsSortKey,
} from '../../api/types/trip';
import { TripCardAccordion } from '../../components';
import ActionBarDrawer from '../../components/actionBar/actionBarDrawer/ActionBarDrawer';
import ActionBarTab from '../../components/actionBar/actionBarTab/ActionBarTab';
import LoadMore from '../../components/loadMore/LoadMore';
import { TripsListingPageWrapper } from './TripsListingPage.styled';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSearchParams } from 'react-router-dom';
import { getTrips } from '../../api';
import { ITrip } from '../../types';
import { rowsPerPage } from '../../config';
import FullScreenLoader from '../../components/FullScreenLoader/FullScreenLoader';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

export const TripsListingPage = () => {
    const hasMounted = useRef(true);
    const [tripData, setTripData] = useState<ITrip[]>([]);
    const [resultLength, setResultLength] = useState<number>(0);
    const [btnLoading, setBtnLoading] = useState(false);
    const [fullScreenLoading, setFullScreenLoading] = useState(true);
    const [searchParams] = useSearchParams();
    const matches = useMediaQuery('(min-width:600px)');
    console.log(searchParams);
    const [page, setPage] = useState('1');
    const { t } = useTranslation('error');

    useEffect(() => {
        console.log('Mount');
        const fetchTripData = async () => {
            setBtnLoading(true);
            const originId = searchParams.get('originId') ?? '8';
            const destinationId = searchParams.get('destinationId') ?? '9';
            const tripDate = searchParams.get('tripDate') ?? '2024-05-14';
            const sortByParam = searchParams.get(
                'sortBy'
            ) as ITripsSortKey | null;
            const sortBy: ITripsSortKey =
                sortByParam ?? ITripsSortKey.DEPARTURE_TIMESTAMP;
            const sortOrderParam = searchParams.get(
                'sortOrder'
            ) as ISortOrder | null;
            const sortOrder: ISortOrder = sortOrderParam ?? ISortOrder.ASC;
            const passengerCount = searchParams.get('passengerCount') ?? '1';
            try {
                const params: ITripsQueryRequest = {
                    originId: originId,
                    destinationId: destinationId,
                    tripDate: tripDate,
                    sortBy: sortBy,
                    sortOrder: sortOrder,
                    page: Number(page),
                    pageSize: rowsPerPage,
                    passengerCount: Number(passengerCount),
                };
                const response = await getTrips(params);
                setTripData((prev) => [...prev, ...response.trips]);
                setResultLength(response.resultCount);
                setFullScreenLoading(false);
                setBtnLoading(false);
            } catch (error) {
                toast.error(t('unexpected'));
                console.error('Error fetching trip data:', error);
                setFullScreenLoading(false);
                setBtnLoading(false);
            }
        };
        if (hasMounted.current) {
            console.log(hasMounted.current);
            hasMounted.current = false;
            fetchTripData().catch((error) => {
                console.error('Error in useEffect:', error);
            });
        }
    }, [page, searchParams, t]);

    console.log(tripData);
    return (
        <TripsListingPageWrapper>
            {matches ? <ActionBarTab showFilterSort /> : <ActionBarDrawer />}
            <div className="accordions">
                {tripData.map((indData) => (
                    <TripCardAccordion key={indData.id} data={indData} />
                ))}
            </div>
            {resultLength > 5 && tripData.length != resultLength && (
                <LoadMore
                    resultLength={resultLength}
                    setPage={setPage}
                    page={page}
                    btnLoading={btnLoading}
                    setBtnLoading={setBtnLoading}
                    hasMounted={hasMounted}
                />
            )}
            <FullScreenLoader open={fullScreenLoading} />
        </TripsListingPageWrapper>
    );
};
