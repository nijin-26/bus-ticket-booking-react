import { jwtDecode } from 'jwt-decode';
import storage from './storageUtils';
import { IAuthUser, IDecodedAccessToken } from '../types';

//This function returns the user details stored in local storage,
//if accessToken stored in local storage has not expired
//else returns null
export const getUserDataFromStorage = () => {
    const accessToken = storage.getItem<string>('accessToken');
    const userData = storage.getItem<IAuthUser>('userData');

    if (accessToken && userData) {
        try {
            const decodedToken = jwtDecode<IDecodedAccessToken>(accessToken);
            const expirationTime = decodedToken.exp * 1000;

            //check if token has NOT expired
            if (expirationTime >= Date.now()) {
                return userData;
            }
        } catch (error) {
            console.log('Invalid accessToken');
        }
    }
    storage.removeItem('userData');
    storage.removeItem('accessToken');
    return null;
};
