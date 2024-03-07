import { Button, Menu } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SortGroup from '../sortFilterRadioGroups/SortGroup';

export default function Sort() {
    const { t } = useTranslation('filterSort');

    // anchor state
    const [sortMenu, setSortMenu] = useState<null | HTMLElement>(null);
    const openSort = Boolean(sortMenu);

    // menu handlers
    const sortTypeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSortMenu(event.currentTarget);
    };

    const handleMenuClose = () => {
        setSortMenu(null);
    };

    return (
        <>
            <Button variant="outlined" onClick={sortTypeHandler}>
                {t('sort')}
            </Button>

            <Menu
                id="sort-menu"
                anchorEl={sortMenu}
                open={openSort}
                MenuListProps={{ 'aria-labelledby': 'sort-button' }}
                onClose={handleMenuClose}
            >
                <SortGroup />
            </Menu>
        </>
    );
}
