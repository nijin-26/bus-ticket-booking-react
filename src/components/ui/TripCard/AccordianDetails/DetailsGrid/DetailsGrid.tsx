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
            <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 3, sm: 5, md: 10 }}
            >
                {detailsData.map((detail, index) => (
                    <Grid item xs={6} key={index}>
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

