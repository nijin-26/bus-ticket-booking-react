import { AuthModal } from '../../components';
import { TripDetailPageWrapper } from './TripsDetailPage.styled';

export const TripDetailPage = () => {
    return (
        <TripDetailPageWrapper>
            <h1>TripDetailPage</h1>
            <AuthModal isOpen={true} closeModal={() => {}} />
        </TripDetailPageWrapper>
    );
};
