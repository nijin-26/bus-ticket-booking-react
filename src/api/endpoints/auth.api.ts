import { API, apiRoutes } from '..';
import { IAuthData } from '../../types';
import { getAuthDataFromSignInResponse } from '../converters/signIn.converter';
import { IRenewTokenResponse } from '../types/renewToken';
import { ISignInRequest, ISignInResponse } from '../types/signIn';
import { ISignUpRequest, ISignUpResponse } from '../types/signUp';
import { refreshApi } from '../services/axios';

export interface ISignUpProps {
    fullName: string;
    email: string;
    phone: string;
    password: string;
}

export const signIn = async (body: ISignInRequest): Promise<IAuthData> => {
    const response: ISignInResponse = await API.post(apiRoutes.signIn, body);
    const authData = getAuthDataFromSignInResponse(response);
    return authData;
};

export const signUp = async (props: ISignUpProps): Promise<ISignUpResponse> => {
    const body: ISignUpRequest = {
        name: props.fullName,
        email: props.email,
        phone: props.phone,
        password: props.password,
    };
    const response: ISignUpResponse = await API.post(apiRoutes.signUp, body);
    return response;
};

export const signOut = async () => {
    const response = await API.post(apiRoutes.signOut);
    return response;
};

export const renewToken = async (
    refreshToken: string
): Promise<IRenewTokenResponse> => {
    const response: IRenewTokenResponse = await refreshApi.post(
        apiRoutes.renewToken,
        null,
        {
            headers: {
                Authorization: `Bearer ${refreshToken}`,
            },
        }
    );
    return response;
};
