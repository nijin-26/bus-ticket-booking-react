import apiClient from '../axios';
import { ISignInRequest, ISignInResponse } from '../types/signIn';
import { ISignUpRequest, ISignUpResponse } from '../types/signUp';

export const signIn = async (
    body: ISignInRequest
): Promise<ISignInResponse> => {
    const response: ISignInResponse = await apiClient.post(
        'auth/sign-in',
        body
    );
    return response;
};

export const signUp = async (
    body: ISignUpRequest
): Promise<ISignUpResponse> => {
    const response: ISignUpResponse = await apiClient.post(
        'auth/sign-up',
        body
    );
    return response;
};
