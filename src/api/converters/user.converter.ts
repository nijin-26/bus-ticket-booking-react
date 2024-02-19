import { IUser } from '../../types';
import { IUserExternal } from '../types/user';

export const getUserFromUserExternal = (userExternal: IUserExternal): IUser => {
    const user: IUser = {
        id: userExternal.id.toString(),
        fullName: userExternal.name,
        email: userExternal.email,
        phone: userExternal.phone,
    };
    return user;
};
