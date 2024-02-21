import { GridColDef } from '@mui/x-data-grid';
import { TFunction } from 'i18next';

const getUsersTableColumns = (t: TFunction): GridColDef[] => {
    return [
        { field: 'fullName', headerName: t('fullName') },
        { field: 'email', headerName: t('email') },
        {
            field: 'phone',
            headerName: t('phone'),
            type: 'number',
        },
    ];
};

export default getUsersTableColumns;
