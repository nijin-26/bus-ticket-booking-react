import { API, apiRoutes } from '..';
import { ISignInRequest, ISignInResponse } from '../types/signIn';
import { ISignUpRequest, ISignUpResponse } from '../types/signUp';

export const signIn = async (
    body: ISignInRequest
): Promise<ISignInResponse> => {
    const response: ISignInResponse = await API.post(apiRoutes.signIn, body);
    return response;
};

export const signUp = async (
    body: ISignUpRequest
): Promise<ISignUpResponse> => {
    const response: ISignUpResponse = await API.post(apiRoutes.signUp, body);
    return response;
};
