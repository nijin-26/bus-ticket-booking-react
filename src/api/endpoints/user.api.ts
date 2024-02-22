import { API, apiRoutes } from '..';
import { IUser } from '../../types';
import { getUserFromUserExternal } from '../converters/user.converter';
import { IUsersResponse } from '../types/user';

export const getAllUsers = async (
    page: string,
    pageSize: string
): Promise<IUser[]> => {
    const response: IUsersResponse = await API.get(apiRoutes.user, {
        params: {
            page,
            pageSize,
        },
    });
    const users: IUser[] = response.map((user) =>
        getUserFromUserExternal(user)
    );
    return users;
};
