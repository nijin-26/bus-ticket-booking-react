import { GridColDef } from '@mui/x-data-grid';
import { useTranslation } from 'react-i18next';

const useGetUsersTableColumns = (): GridColDef[] => {
    const { t } = useTranslation('usersList');

    return [
        { field: 'fullName', headerName: t('fullName') },
        { field: 'email', headerName: t('email') },
        {
            field: 'phone',
            headerName: t('phone'),
            align: 'right',
        },
    ];
};

export default useGetUsersTableColumns;
