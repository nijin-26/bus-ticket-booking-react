import { Box, Grid } from '@mui/material';
import { DetailsItem } from './DetailItem/DetailItem';
import busDeparture from '../../../../../assets/accordianDetails/Bus_departure.svg';
import busArrival from '../../../../../assets/accordianDetails/Bus_arrival.svg';
import bus from '../../../../../assets/accordianDetails/Bus.svg';
import stopwatch from '../../../../../assets/accordianDetails/Stopwatch.svg';

export const DetailsGrid = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 3, sm: 5, md: 10 }}
            >
                <Grid item xs={6}>
                    <DetailsItem
                        title="Departure"
                        value="Trivandrum, 20th Jan, 5:00 am"
                        imageSrc={busDeparture}
                        imageAlt="Bus with a clock symbol for departure"
                    />
                </Grid>
                <Grid item xs={6}>
                    <DetailsItem
                        title="Arrival"
                        value="Banglore, 23rd Jan, 18.40 pm"
                        imageSrc={busArrival}
                        imageAlt="Bus with a marker symbol for arrival"
                    />
                </Grid>
                <Grid item xs={6}>
                    <DetailsItem
                        title="Duration"
                        value="3 days, 13 hours, 40 minutes"
                        imageSrc={stopwatch}
                        imageAlt="Timer"
                    />
                </Grid>
                <Grid item xs={6}>
                    <DetailsItem
                        title="Bus Type"
                        value="AC, Seater"
                        imageSrc={bus}
                        imageAlt="Bus"
                    />
                </Grid>
            </Grid>
        </Box>
    );
};
