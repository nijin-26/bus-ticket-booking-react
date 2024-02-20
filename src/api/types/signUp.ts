export interface ISignUpRequest {
    name: string;
    email: string;
    phone: string;
    password: string;
}

export interface ISignUpResponse {
    user: {
        passwordChanged: boolean;
        name: string;
        email: string;
        phone: string;
        password: string;
        verificationToken: string;
        tokenGeneratedAt: string;
        role: null;
        resetToken: null;
        resetTokenGeneratedAt: null;
        id: number;
        createdAt: string;
        updatedAt: string;
    };
}
