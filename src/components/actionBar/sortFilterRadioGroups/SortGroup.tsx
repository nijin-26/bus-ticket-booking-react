import { Radio, RadioGroup } from '@mui/material';
import { StyledFormControlLabel } from '../filterSort/FilterSort.styled';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSort } from '../../../app/features/busSearchSlice';
import { ISortOrder, ITripsSortKey } from '../../../api/types/trip';

export default function SortGroup() {
    const { t } = useTranslation('filterSort');
    const dispatch = useDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    // setting sort to store and query params
    const sortHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        switch (event.target.value) {
            case 'PriceHighToLow':
                dispatch(
                    setSort({
                        sortBy: ITripsSortKey.FARE,
                        sortOrder: ISortOrder.DESC,
                    })
                );
                break;
            case 'PriceLowToHigh':
                dispatch(
                    setSort({
                        sortBy: ITripsSortKey.FARE,
                        sortOrder: ISortOrder.ASC,
                    })
                );
                break;
            case 'SeatsAvailable':
                dispatch(
                    setSort({
                        sortBy: ITripsSortKey.SEATS_AVAILABLE,
                        sortOrder: ISortOrder.ASC,
                    })
                );
                break;
            case 'StartDate':
                dispatch(
                    setSort({
                        sortBy: ITripsSortKey.DEPARTURE_TIMESTAMP,
                        sortOrder: ISortOrder.ASC,
                    })
                );
                break;
        }

        searchParams.set('sortBy', event.target.value);
        setSearchParams(searchParams);
    };

    const defaultSortParam = 'SeatsAvailable';
    const queriesSortParam = searchParams.get('sortBy');

    return (
        <>
            <RadioGroup
                onChange={sortHandler}
                value={queriesSortParam ?? defaultSortParam}
            >
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
