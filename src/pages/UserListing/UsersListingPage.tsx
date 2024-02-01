import { UsersListingPageWrapper } from './UsersListingPage.styled';
import { UserCard } from './components/UserCard/UserCard';

export const UsersListingPage = () => {
    return (
        <UsersListingPageWrapper>
            <h1>UsersListingPage</h1>
            <UserCard />
            <UserCard />
        </UsersListingPageWrapper>
    );
};
