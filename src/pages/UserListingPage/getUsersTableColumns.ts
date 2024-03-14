import { GridColDef } from '@mui/x-data-grid';
import { TFunction } from 'i18next';

const getUsersTableColumns = (t: TFunction): GridColDef[] => {
    return [
        { field: 'fullName', headerName: t('fullName'), minWidth: 200 },
        { field: 'email', headerName: t('email'), minWidth: 200 },
        {
            field: 'phone',
            headerName: t('phone'),
            minWidth: 200,
        },
    ];
};

export default getUsersTableColumns;
