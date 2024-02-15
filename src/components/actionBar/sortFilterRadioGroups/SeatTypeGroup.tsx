import { Button, Radio, RadioGroup } from '@mui/material';
import { StyledFormControlLabel } from '../filterSort/FilterSort.styled';
import { filterValues } from '../../../config';
import { AirlineSeatReclineNormal, Hotel } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function SeatTypeGroup() {
    const { t } = useTranslation('filterSort');
    const [seatTypeFilter, setSeatTypeFilter] = useState<string | null>(null);

    const seatFilterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (seatTypeFilter === event.target.value) {
            setSeatTypeFilter(null);
        } else {
            setSeatTypeFilter(event.target.value);
        }
    };

    return (
        <>
            <RadioGroup onChange={seatFilterHandler} value={seatTypeFilter}>
                <StyledFormControlLabel
                    label={t('seater')}
                    control={
                        <Radio
                            value={filterValues.seater}
                            icon={<AirlineSeatReclineNormal />}
                        />
                    }
                />
                <StyledFormControlLabel
                    label={t('sleeper')}
                    control={
                        <Radio value={filterValues.sleeper} icon={<Hotel />} />
                    }
                />
            </RadioGroup>
            <Button
                onClick={() => {
                    setSeatTypeFilter(null);
                }}
                sx={{ width: '8rem' }}
            >
                {t('clear')}
            </Button>
        </>
    );
}
