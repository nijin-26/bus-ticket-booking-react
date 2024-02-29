import { API, apiRoutes } from '..';
import { IUser } from '../../types';
import { getUserFromUserExternal } from '../converters/user.converter';
import { IPaginatedData } from '../types/pagination';
import { IUsersResponse } from '../types/user';

export const getUsers = async (
    page: string,
    pageSize: string
): Promise<IPaginatedData<IUser>> => {
    const response: IUsersResponse = await API.get(apiRoutes.user, {
        params: {
            page,
            pageSize,
        },
    });
    const users: IUser[] = response.users.map((user) =>
        getUserFromUserExternal(user)
    );
    return users;
};
