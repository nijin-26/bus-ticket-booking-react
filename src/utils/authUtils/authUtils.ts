import { jwtDecode } from 'jwt-decode';
import { IAuthUser, IDecodedAccessToken } from '../../types';
import { storage } from '..';

//This function returns the user details stored in local storage,
//if userData and accessToken or refreshToken is present
//else returns null
export const getUserDataFromStorage = () => {
    // const accessToken = getToken('accessToken');
    const userData = storage.getItem<IAuthUser>('userData');
    const refreshToken = getToken('refreshToken');
    const accessToken = getToken('accessToken');

    if (userData && (refreshToken || accessToken)) {
        return userData;
    }
    storage.removeItem('userData');
    return null;
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
