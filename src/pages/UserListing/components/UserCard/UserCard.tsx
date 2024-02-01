import { UserCardWrapper } from './UserCard.styled';

export const UserCard = () => {
    return (
        <UserCardWrapper>
            <div className="fullName">John Doe</div>
            <div className="email">johndoe@gmail.com</div>
            <div className="phone">+1 123 456 7890</div>
        </UserCardWrapper>
    );
};
