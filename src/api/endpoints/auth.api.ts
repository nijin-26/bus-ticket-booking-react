import apiClient from '../axios';
import { ISignInResponse } from '../types/signIn';

export const signIn = async (
    username: string,
    password: string
): Promise<ISignInResponse> => {
    const body = {
        username,
        password,
    };
    const response: ISignInResponse = await apiClient.post('/sign-in', body);
    return response;
};

export const signUp = async (
    username: string,
    password: string
): Promise<ISignInResponse> => {
    const body = {
        username,
        password,
    };
    const response: ISignInResponse = await apiClient.post('/sign-up', body);
    return response;
}