import { EUserRole } from '../../types';

export interface ISignInRequest {
    email: string;
    password: string;
}

export interface ISignInResponse {
    accessToken: string;
    refreshToken: string;
    firstName: string;
    email: string;
    role: EUserRole;
}
