import { Radio, RadioGroup } from '@mui/material';
import { StyledFormControlLabel } from '../filterSort/FilterSort.styled';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setBusSearchParams } from '../../../app/features/busSearchSlice';
import { useAppSelector } from '../../../app/hooks';

export default function SortGroup() {
    const { t } = useTranslation('filterSort');
    const dispatch = useDispatch();
    // const sortParam = useAppSelector((state) => state.busSearch.sortBy);

    const [searchParams, setSearchParams] = useSearchParams();

    // upon mount the query param is set to store?

    const sortHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setBusSearchParams({ sortBy: event.target.value }));
        searchParams.set('sortBy', event.target.value);
        setSearchParams(searchParams);
    };

    const sortParam = searchParams.get('sortBy');

    return (
        <>
            <RadioGroup onChange={sortHandler} value={sortParam}>
                <StyledFormControlLabel
                    label={t('startDate')}
                    control={<Radio value="StartDate" />}
                />
                <StyledFormControlLabel
                    label={t('seatsAvailable')}
                    control={<Radio value="SeatsAvailable" />}
                />
                <StyledFormControlLabel
                    label={t('priceHighToLow')}
                    control={<Radio value="PriceHighToLow" />}
                />
                <StyledFormControlLabel
                    label={t('priceLowToHigh')}
                    control={<Radio value="PriceLowToHigh" />}
                />
            </RadioGroup>
        </>
    );
}
