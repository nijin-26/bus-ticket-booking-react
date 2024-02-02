import { UsersListingPageWrapper } from './UsersListingPage.styled';
import { UsersTable } from './components/Table/UsersTable';
import users from '../../data/sampleUsers.json';

export const UsersListingPage = () => {
    return (
        <UsersListingPageWrapper>
            <UsersTable users={users} />
        </UsersListingPageWrapper>
    );
};
