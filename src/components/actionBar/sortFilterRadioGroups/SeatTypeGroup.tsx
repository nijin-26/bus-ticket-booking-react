import { Button, Radio, RadioGroup } from '@mui/material';
import { StyledFormControlLabel } from '../filterSort/FilterSort.styled';
import { filterValues } from '../../../config';
import { AirlineSeatReclineNormal, Hotel } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    addSeatFilter,
    removeSeatFilter,
} from '../../../app/features/busSearchSlice';
import { ISeatType } from '../../../types';

export default function SeatTypeGroup() {
    const { t } = useTranslation('filterSort');
    const dispatch = useDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const seatFilterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(addSeatFilter(event.target.value as ISeatType));
        searchParams.set('seatType', event.target.value);
        setSearchParams(searchParams);
    };

    const seatTypeParam = searchParams.get('seatType');

    return (
        <>
            <RadioGroup onChange={seatFilterHandler} value={seatTypeParam}>
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
                    searchParams.delete('seatType');
                    setSearchParams(searchParams);
                    dispatch(removeSeatFilter());
                }}
                sx={{ width: '8rem' }}
            >
                {t('clear')}
            </Button>
        </>
    );
}
