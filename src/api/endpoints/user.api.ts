import { API, apiRoutes } from '..';
import { IUser } from '../../types';
import { getUserFromUserExternal } from '../converters/user.converter';
import { IUsersResponse } from '../types/user';

export const getAllUsers = async (): Promise<IUser[]> => {
    const response: IUsersResponse = await API.get(apiRoutes.user);
    const users: IUser[] = response.map((user) =>
        getUserFromUserExternal(user)
    );
    return users;
};
