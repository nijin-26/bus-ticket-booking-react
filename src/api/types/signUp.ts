
export interface ISignUpRequest {
    name: string;
    email: string;
    phone: string;
    password: string;
}

export interface ISignUpResponse {
    accessToken: string;
    refreshToken: string;
}
