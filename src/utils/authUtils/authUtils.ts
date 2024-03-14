import { jwtDecode } from 'jwt-decode';
import { IAuthUser, IDecodedAccessToken } from '../../types';
import { storage } from '..';
import { renewToken } from '../../api';

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

//This function returns the user details stored in local storage,
//if userData and accessToken or refreshToken is present
//else returns null
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
            return null;
        }
    }
    storage.removeItem('userData');
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
        return null;
    }
};

// This function gets the refreshToken from storage if exists and
// calls renewToken and updates the new tokens in local storage
export const refresh = async () => {
    const refreshToken = getToken('refreshToken');

    if (refreshToken) {
        try {
            const response = await renewToken(refreshToken);
            storage.setItem('accessToken', response.accessToken);
            storage.setItem('refreshToken', response.refreshToken);
        } catch (error) {
            console.error('Renew Token Failed : ', error);
        }
    } else {
        console.error('Renew Token failed : could not find refreshToken');
    }
};

//This function creates a setInterval to renew token periodically
export const setRefreshInterval = (accessToken: string) => {
    const remainingTime = getRemainingTimeForExpiry(accessToken);
    if (remainingTime) {
        // set interval for renew-token as 2 minutes before token expiry
        // const intervalForRenew = remainingTime - 120000;
        const intervalForRenew = 5000;
        const intervalId = setInterval(refresh, intervalForRenew);
        return intervalId;
    }
};
