export interface IUserExternal {
    id: number;
    createdAt: string;
    updatedAt: string;
    name: string;
    email: string;
    phone: string;
    role: string;
    password: string;
    passwordChanged: boolean;
}

export type IUsersResponse = IUserExternal[];