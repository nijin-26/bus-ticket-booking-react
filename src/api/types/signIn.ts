export interface ISignInRequest {
    email: string;
    password: string;
}

export interface ISignInResponse {
    accessToken: string;
    firstName: string;
    email: string;
    role: null;
}
