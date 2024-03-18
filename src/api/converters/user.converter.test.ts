import { expect, test } from 'vitest';
import { getUserFromUserExternal } from './user.converter';
import { IUserExternal } from '../types/user';
import { IUser } from '../../types';

test('getUserFromUserExternal should return the correct user object', () => {
    const userExternal: IUserExternal = {
        passwordChanged: false,
        id: 9,
        createdAt: '2024-02-16T05:48:16.374Z',
        updatedAt: '2024-02-21T14:37:02.273Z',
        name: 'Issac',
        email: 'issac@gmail.com',
        phone: '8547785477',
        role: 'customer',
        password: 'abcdefgh@$1234',
    };

    const expectedUser: IUser = {
        id: '9',
        fullName: 'Issac',
        email: 'issac@gmail.com',
        phone: '8547785477',
    };

    const user = getUserFromUserExternal(userExternal);

    expect(user).toEqual(expectedUser);
});
