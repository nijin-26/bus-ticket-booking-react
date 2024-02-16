import { Radio, RadioGroup } from '@mui/material';
import { StyledFormControlLabel } from '../filterSort/FilterSort.styled';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

export default function SortGroup() {
    const { t } = useTranslation('filterSort');

    const [searchParams, setSearchParams] = useSearchParams();
    const sortHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
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
