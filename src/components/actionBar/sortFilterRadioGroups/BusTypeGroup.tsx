import { Button, Radio, RadioGroup } from '@mui/material';
import { StyledFormControlLabel } from '../filterSort/FilterSort.styled';
import { useTranslation } from 'react-i18next';
import { filterValues } from '../../../config';
import { AcUnit, Air } from '@mui/icons-material';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    addBusFilter,
    removeBusFilter,
} from '../../../app/features/busSearchSlice';

export default function BusTypeGroup() {
    const { t } = useTranslation('filterSort');
    const dispatch = useDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const busFilterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        //dispatch(setBusSearchParams({ busType: event.target.value }));
        dispatch(addBusFilter(event.target.value));
        searchParams.set('busType', event.target.value);
        setSearchParams(searchParams);
    };

    const busTypeParam = searchParams.get('busType');

    console.log('busTypeParam', busTypeParam);

    return (
        <>
            <RadioGroup onChange={busFilterHandler} value={busTypeParam}>
                <StyledFormControlLabel
                    label={t('AC')}
                    control={
                        <Radio value={filterValues.ac} icon={<AcUnit />} />
                    }
                />
                <StyledFormControlLabel
                    label={t('nonAC')}
                    control={
                        <Radio value={filterValues.nonAc} icon={<Air />} />
                    }
                />
            </RadioGroup>
            <Button
                onClick={() => {
                    searchParams.delete('busType');
                    setSearchParams(searchParams);
                    dispatch(removeBusFilter());
                }}
                sx={{ width: '8rem' }}
            >
                {t('clear')}
            </Button>
        </>
    );
}
