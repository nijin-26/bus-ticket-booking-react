import { useEffect, useState } from 'react';
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
import { IBusType, ISeatType, ITrip } from '../../types';
import { rowsPerPage } from '../../config';
import FullScreenLoader from '../../components/FullScreenLoader/FullScreenLoader';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import bus from '../../assets/bus.svg';
export const TripsListingPage = () => {
    const [tripData, setTripData] = useState<ITrip[]>([]);
    const [resultLength, setResultLength] = useState<number>(0);
    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false); //this state is used to not show no data section if there is an error in fetch
    const [page, setPage] = useState('1');
    const [searchParams] = useSearchParams();
    const [flag, setFlag] = useState(false);
    const matches = useMediaQuery('(min-width:600px)');
    const { t } = useTranslation(['error', 'tripListing']);

    const fetchTripData = async () => {
        setLoading(true);
        const originId = searchParams.get('originId') as string;
        const destinationId = searchParams.get('destinationId') as string;
        const tripDate = searchParams.get('tripDate') as string;
        const sortByParam = searchParams.get('sortBy');
        // const sortBy: ITripsSortKey =
        //     sortByParam ?? ITripsSortKey.SEATS_AVAILABLE;
        console.log(sortByParam, 'sortbyparam');
        // console.log(sortBy, 'sortby');
        const sortOrderParam = searchParams.get(
            'sortOrder'
        ) as ISortOrder | null;
        let sortOrder: ISortOrder = sortOrderParam ?? ISortOrder.DESC;
        const seatTypeParam = searchParams.get('seatType') as ISeatType;
        const seatType: ISeatType = seatTypeParam;
        const busTypeParam = searchParams.get('busType') as IBusType;
        const busType: IBusType = busTypeParam;
        const passengerCount = searchParams.get('passengerCount') ?? '1';
        let sortBy: ITripsSortKey = ITripsSortKey.SEATS_AVAILABLE;
        switch (sortByParam) {
            case 'PriceLowToHigh':
                sortBy = ITripsSortKey.FARE;
                sortOrder = ISortOrder.ASC;
                break;
            case 'PriceHighToLow':
                sortBy = ITripsSortKey.FARE;
                sortOrder = ISortOrder.DESC;
                break;
            case 'SeatsAvailable':
                sortBy = ITripsSortKey.SEATS_AVAILABLE;
                break;
            case 'StartDate':
                sortBy = ITripsSortKey.DEPARTURE_TIMESTAMP;
                break;
        }
        try {
            const params: ITripsQueryRequest = {
                originId: originId,
                destinationId: destinationId,
                tripDate: tripDate,
                sortBy: sortBy,
                sortOrder: sortOrder,
                busType: busType,
                seatType: seatType,
                page: Number(page),
                pageSize: rowsPerPage,
                passengerCount: Number(passengerCount),
            };
            const response = await getTrips(params);
            // console.log(tripData, 'before set');
            const uniqueTrips = new Set([...tripData, ...response.trips]);
            setFlag(true);
            setTripData(() => Array.from(uniqueTrips));
            setResultLength(response.resultCount);
            setLoading(false);
        } catch (error) {
            toast.error(t('unexpected'));
            console.error('Error fetching trip data:', error);
            setHasError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // console.log('useEffect 1');
        // console.log('clearing data');
        setTripData([]);
        setPage('1');
        setFlag(false);
        // console.log(page, 'page');
    }, [searchParams]);

    useEffect(() => {
        // console.log('useEffect 3');
        if (tripData.length === 0 && !flag) {
            fetchTripData().catch((error) => {
                console.error('Error in useEffect:', error);
                setHasError(true);
            });
        }
    }, [tripData]);

    useEffect(() => {
        // console.log('useEffect 2');
        fetchTripData().catch((error) => {
            console.error('Error in useEffect:', error);
            setHasError(true);
        });
    }, [page, t]);

    console.log(tripData, 'tripdata'); //remove
    return (
        <TripsListingPageWrapper>
            {matches ? <ActionBarTab showFilterSort /> : <ActionBarDrawer />}
            <section className="accordions">
                {tripData.length !== 0
                    ? tripData.map((indData) => (
                          <TripCardAccordion key={indData.id} data={indData} />
                      ))
                    : !loading &&
                      !hasError && (
                          <section className="no-data">
                              <h2>{t('tripListing:noOptions')}</h2>
                              <p>{t('tripListing:change')}</p>
                              <img src={bus} alt="bus-icon" />
                          </section>
                      )}
            </section>
            {resultLength > 5 && tripData.length != resultLength && (
                <LoadMore
                    resultLength={resultLength}
                    setPage={setPage}
                    page={page}
                    btnLoading={loading}
                    setBtnLoading={setLoading}
                />
            )}
            <FullScreenLoader open={loading && tripData.length === 0} />
        </TripsListingPageWrapper>
    );
};
