import { useTranslation } from 'react-i18next';

const useGetUsersTableColumns = () => {
    const { t } = useTranslation('usersList');

    return [
        { field: 'fullName', headerName: t('fullName'), flex: 1 },
        { field: 'email', headerName: t('email'), flex: 1 },
        { field: 'phone', headerName: t('phone'), flex: 1 },
    ];
};

export default useGetUsersTableColumns;
