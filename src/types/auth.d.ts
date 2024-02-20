export interface IAuthData {
    accessToken: string;
    fullName: string;
    email: string;
    role: null;
}

interface IAuthUser {
    fullName: string;
    email: string;
    role: null;
}

export interface IDecodedAccessToken {
    userId: number;
    role: null;
    iat: number;
    exp: number;
}

export interface IAuthResponseError {
    success: false;
    message: string;
    errorDetail: unknown;
}

export interface ISignInForm {
    email: string;
    password: string;
}

export interface ISignUpForm {
    fullName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}
