import { useTranslation } from 'react-i18next';

const useGetUsersTableColumns = () => {
    const { t } = useTranslation('usersList');

    return [
        { field: 'fullName', headerName: t('fullName') },
        { field: 'email', headerName: t('email') },
        { field: 'phone', headerName: t('phone') },
    ];
};

export default useGetUsersTableColumns;
