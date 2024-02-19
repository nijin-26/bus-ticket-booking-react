export interface IAuthData {
    accessToken: string;
    fullName: string;
    email: string;
    role: null;
}

export interface IAuthResponseError {
    success: false;
    message: string;
    errorDetail: unknown;
}
