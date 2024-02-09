export interface ISignUpRequest {
    fullName: string;
    email: string;
    phone: string;
    password: string;
}

export interface ISignUpResponse {
    accessToken: string;
    refreshToken: string;
}