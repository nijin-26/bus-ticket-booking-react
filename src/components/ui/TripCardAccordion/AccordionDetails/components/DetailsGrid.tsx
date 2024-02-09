import { Box, Grid } from '@mui/material';
import { DetailsItem } from './DetailItem';
import { useTranslation } from 'react-i18next';
import { BusDepartureIcon } from '../../../../../assets/accordianDetails/BusDepartureIcon';
import { BusArrivalIcon } from '../../../../../assets/accordianDetails/BusArrivalIcon';
import { StopwatchIcon } from '../../../../../assets/accordianDetails/StopwatchIcon';
import { BusIcon } from '../../../../../assets/accordianDetails/BusIcon';

export const DetailsGrid = () => {
    const { t } = useTranslation('tripDetails');

    const detailsData = [
        {
            title: t('departure'),
            value: 'Trivandrum, 20th Jan, 5:00 am',
            icon: <BusDepartureIcon />,
        },
        {
            title: t('arrival'),
            value: 'Bangalore, 23rd Jan, 18:40 pm',
            icon: <BusArrivalIcon />,
        },
        {
            title: t('duration'),
            value: '3 days, 13 hours, 40 minutes',
            icon: <StopwatchIcon />,
        },
        {
            title: t('busType'),
            value: 'AC, Seater',
            icon: <BusIcon />,
        },
    ];

    return (
        <Box sx={{ width: '100%' }} mt={3}>
            <Grid container rowSpacing={2} columnSpacing={30}>
                {detailsData.map((detail, index) => (
                    <Grid item key={index} xs={12} sm={12} md={6} lg={6}>
                        {/* 
                        For small and medium screens (xs, sm), it will be a single column.
                        For screens equal to or larger than md (medium) or lg(large), it will be 2 columns.*/}
                        <DetailsItem
                            title={detail.title}
                            value={detail.value}
                            icon={detail.icon}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
