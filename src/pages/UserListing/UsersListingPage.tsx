import { UsersListingPageWrapper } from './UsersListingPage.styled';
import { UsersTable } from './components/Table/UsersTable';
import users from '../../data/sampleUsers.json';

export const UsersListingPage = () => {
    return (
        <UsersListingPageWrapper component={'section'}>
            <UsersTable users={users} />
        </UsersListingPageWrapper>
    );
};
