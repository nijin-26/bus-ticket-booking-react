import { Box, Grid } from '@mui/material';
import { DetailsItem } from './DetailItem/DetailItem';
import busDeparture from '../../../../../assets/accordianDetails/Bus_departure.svg';
import busArrival from '../../../../../assets/accordianDetails/Bus_arrival.svg';
import bus from '../../../../../assets/accordianDetails/Bus.svg';
import stopwatch from '../../../../../assets/accordianDetails/Stopwatch.svg';
import { useTranslation } from 'react-i18next';

export const DetailsGrid = () => {
    const { t } = useTranslation('tripDetails');

    const detailsData = [
        {
            title: t('departure'),
            value: 'Trivandrum, 20th Jan, 5:00 am',
            imageSrc: busDeparture,
            imageAlt: 'Bus with a clock symbol for departure',
        },
        {
            title: t('arrival'),
            value: 'Bangalore, 23rd Jan, 18:40 pm',
            imageSrc: busArrival,
            imageAlt: 'Bus with a marker symbol for arrival',
        },
        {
            title: t('duration'),
            value: '3 days, 13 hours, 40 minutes',
            imageSrc: stopwatch,
            imageAlt: 'Timer',
        },
        {
            title: t('busType'),
            value: 'AC, Seater',
            imageSrc: bus,
            imageAlt: 'Bus',
        },
    ];

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={2} columnSpacing={30}>
                {detailsData.map((detail, index) => (
                    <Grid item key={index} xs={12} sm={12} md={6} lg={6}>
                        {/* 
                        For small and medium screens (xs, sm), it will be a single column.
                        For screens equal to or larger than md (medium) or lg(large), it will be 2 columns.
                        */}
                        <DetailsItem
                            title={detail.title}
                            value={detail.value}
                            imageSrc={detail.imageSrc}
                            imageAlt={detail.imageAlt}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
