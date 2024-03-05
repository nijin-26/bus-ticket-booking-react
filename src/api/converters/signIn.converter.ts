import { IAuthData } from '../../types';
import { ISignInResponse } from '../types/signIn';

export const getAuthDataFromSignInResponse = (
    response: ISignInResponse
): IAuthData => ({
    accessToken: response.accessToken,
    refreshToken: response.refreshToken,
    fullName: response.firstName,
    email: response.email,
    role: response.role,
});
