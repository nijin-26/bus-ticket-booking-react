import { API, apiRoutes } from '..';
import { IAuthData } from '../../types';
import { getAuthDataFromSignInResponse } from '../converters/signIn.converter';
import { ISignInRequest, ISignInResponse } from '../types/signIn';
import { ISignUpRequest, ISignUpResponse } from '../types/signUp';

export const signIn = async (body: ISignInRequest): Promise<IAuthData> => {
    const response: ISignInResponse = await API.post(apiRoutes.signIn, body);
    const authData = getAuthDataFromSignInResponse(response);
    return authData;
};

export const signUp = async (
    body: ISignUpRequest
): Promise<ISignUpResponse> => {
    const response: ISignUpResponse = await API.post(apiRoutes.signUp, body);
    return response;
};
