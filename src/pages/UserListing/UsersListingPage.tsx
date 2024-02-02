import { UsersListingPageWrapper } from './UsersListingPage.styled';
import { UsersTable } from './components/Table/UsersTable';
import users from './utils/sampleUsers.json';

export const UsersListingPage = () => {
    return (
        <UsersListingPageWrapper>
            <UsersTable users={users} />
        </UsersListingPageWrapper>
    );
};
