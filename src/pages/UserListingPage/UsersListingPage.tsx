import { useTranslation } from 'react-i18next';
import { DatagridListingPage } from '../../components/DatagridListingpage/DatagridListingPage';
import { IUser } from '../../types';
import getUsersTableColumns from './getUsersTableColumns';
import { getUsers } from '../../api/endpoints/user.api';

export const UsersListingPage = () => {
    const { t } = useTranslation('usersList');
    const columns = getUsersTableColumns(t);
    return (
        <DatagridListingPage<IUser>
            columns={columns}
            t={t}
            getData={getUsers}
            rowId={'id'}
            frontendPagination={false}
            pageTitleTranslation={'pageTitle'}
        />
    );
};
