import { expect, test } from 'vitest';
import { getLocationFromLocationExternal } from './location.converter';
import { ILocationExternal } from '../types/location';
import { ILocation } from '../../types';

test('getLocationFromLocationExternal should return the correct location object', () => {
    const locationExternal: ILocationExternal = {
        name: 'New York',
        shortCode: 'NY',
        id: '1',
        createdAt: '2021-08-01T00:00:00.000Z',
        updatedAt: '2021-08-01T00:00:00.000Z',
    };

    const expectedLocation: ILocation = {
        id: '1',
        name: 'New York',
        shortCode: 'NY',
    };

    const location = getLocationFromLocationExternal(locationExternal);

    expect(location).toEqual(expectedLocation);
});
