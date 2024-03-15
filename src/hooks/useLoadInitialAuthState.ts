import { useEffect } from 'react';
import { setUser, setIntervalId } from '../app/features/authSlice';
import { getInitialAuthState } from '../utils';
import { useAppDispatch, useAppSelector } from '../app/hooks';

export const useLoadInitialAuthState = () => {
    const dispatch = useAppDispatch();
    const refreshIntervalId = useAppSelector(
        (state) => state.auth.refreshIntervalId
    );

    useEffect(() => {
        const loadInitialAuthState = async () => {
            const initialAuthState = await getInitialAuthState();

            if (initialAuthState) {
                dispatch(setUser(initialAuthState.userData));
                dispatch(setIntervalId({ id: initialAuthState.intervalId }));
            }
        };
        void loadInitialAuthState();

        return () => {
            if (refreshIntervalId) {
                clearInterval(refreshIntervalId);
            }
        };
    }, [dispatch]);
};
