import { Button, Radio, RadioGroup } from '@mui/material';
import { StyledFormControlLabel } from '../filterSort/FilterSort.styled';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { filterValues } from '../../../config';
import { AcUnit, Air } from '@mui/icons-material';

export default function BusTypeGroup() {
    const { t } = useTranslation('filterSort');
    const [busTypeFilter, setBusTypeFilter] = useState<string | null>(null);

    const busFilterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (busTypeFilter === event.target.value) {
            setBusTypeFilter(null);
        } else {
            setBusTypeFilter(event.target.value);
        }
    };

    return (
        <>
            <RadioGroup onChange={busFilterHandler} value={busTypeFilter}>
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
                    setBusTypeFilter(null);
                }}
                sx={{ width: '8rem' }}
            >
                {t('clear')}
            </Button>
        </>
    );
}
