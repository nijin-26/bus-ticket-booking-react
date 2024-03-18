import { test, expect } from 'vitest';
import { getAuthDataFromSignInResponse } from './signIn.converter';
import { EUserRole, IAuthData } from '../../types';
import { ISignInResponse } from '../types/signIn';

test('getAuthDataFromSignInResponse should return the correct auth data', () => {
    const signInResponse: ISignInResponse = {
        accessToken: 'abc123',
        refreshToken: 'def456',
        firstName: 'John',
        email: 'john@example.com',
        role: EUserRole.CUSTOMER,
    };

    const expectedAuthData: IAuthData = {
        accessToken: 'abc123',
        refreshToken: 'def456',
        fullName: 'John',
        email: 'john@example.com',
        role: EUserRole.CUSTOMER,
    };

    const authData = getAuthDataFromSignInResponse(signInResponse);

    expect(authData).toEqual(expectedAuthData);
});
