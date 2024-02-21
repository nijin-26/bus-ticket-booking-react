import { Radio, RadioGroup } from '@mui/material';
import { StyledFormControlLabel } from '../filterSort/FilterSort.styled';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSort } from '../../../app/features/busSearchSlice';

export default function SortGroup() {
    const { t } = useTranslation('filterSort');
    const dispatch = useDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    // upon mount the query param is set to store?

    const sortHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === 'PriceHighToLow') {
            dispatch(setSort({ sortBy: 'fare', sortOrder: 'DESC' }));
        } else if (event.target.value === 'PriceLowToHigh') {
            dispatch(setSort({ sortBy: 'fare', sortOrder: 'ASC' }));
        } else if (event.target.value === 'SeatsAvailable') {
            dispatch(setSort({ sortBy: 'seatsAvailable', sortOrder: 'ASC' }));
        } else if (event.target.value === 'StartDate') {
            dispatch(
                setSort({ sortBy: 'departureTimestamp', sortOrder: 'ASC' })
            );
        }

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
