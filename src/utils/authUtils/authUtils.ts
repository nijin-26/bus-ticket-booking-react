import { jwtDecode } from 'jwt-decode';
import { IAuthUser, IDecodedAccessToken } from '../../types';
import { storage } from '..';
import { renewToken } from '../../api';

//This function clears all auth data stored in local storage
export const clearAuthDataFromStorage = () => {
    storage.removeItem('userData');
    storage.removeItem('accessToken');
    storage.removeItem('refreshToken');
};

// This function searches for a token in localStorage
// and returns it if found and not expired, else returns null
// and deletes the expired token
export const getToken = (tokenName: string) => {
    const tokenValue = storage.getItem<string>(tokenName);

    if (tokenValue) {
        try {
            const decodedToken = jwtDecode<IDecodedAccessToken>(tokenValue);
            const expirationTime = decodedToken.exp * 1000;

            //check if token has NOT expired
            if (expirationTime >= Date.now()) {
                return tokenValue;
            }
        } catch (error) {
            console.error('Invalid token');
        }
    }
    storage.removeItem(tokenName);
    return null;
};

// This function retrieves the initial auth state by checking for userData, refreshToken & accessToken in storage.
// If all necessary data is present, it attempts to renew the access token using the refresh token.
// If successful, it sets a refresh interval and returns user data along with the interval ID.
// If renewal fails, it logs an error and returns null.
// If any required data is missing, it clears user data from storage and returns null.
export const getInitialAuthState = async () => {
    const userData = storage.getItem<IAuthUser>('userData');
    const refreshToken = getToken('refreshToken');
    const accessToken = getToken('accessToken');

    if (userData && refreshToken && accessToken) {
        try {
            const response = await renewToken(refreshToken);
            const intervalId = setRefreshInterval(response.accessToken);

            if (intervalId) {
                return { userData, intervalId };
            }
        } catch (error) {
            console.error('Renew Token Failed : ', error);
        }
    }
    clearAuthDataFromStorage();
    return null;
};

// This function accepts a token and returns the remaining time(milliseconds) left for expiry
// returns null in case of decode error
export const getRemainingTimeForExpiry = (tokenValue: string) => {
    try {
        const decodedToken = jwtDecode<IDecodedAccessToken>(tokenValue);
        const expirationTime = decodedToken.exp * 1000;
        const currentTime = Date.now();

        const remainingTime = expirationTime - currentTime;
        return remainingTime;
    } catch (err) {
        console.error('Invalid token');
    }
};

// This function gets the refreshToken from storage and renews the tokens
// if refreshToken not found then clears the interval for renewingTokens
export const refresh = async (intervalId: number) => {
    const refreshToken = getToken('refreshToken');

    if (refreshToken) {
        try {
            const response = await renewToken(refreshToken);
            storage.setItem('accessToken', response.accessToken);
            storage.setItem('refreshToken', response.refreshToken);
        } catch (error) {
            console.error('Renew Token Failed : ', error);
            clearInterval(intervalId);
        }
    } else {
        console.error('Renew-Token failed : no refreshToken');
        clearInterval(intervalId);
    }
};

// This function creates a setInterval to renew token periodically
// and returns the intervalId
// returns undefined if remainingTime for expiry cannot be found
export const setRefreshInterval = (accessToken: string) => {
    const remainingTime = getRemainingTimeForExpiry(accessToken);
    if (remainingTime) {
        // renew token every 2 minutes before access token expires
        const intervalForRenew = remainingTime - 120000;

        const intervalId = setInterval(
            () => refresh(intervalId),
            //set atleast a minimum interval of 1 minute
            Math.max(intervalForRenew, 60000)
        );
        return intervalId;
    }
};
