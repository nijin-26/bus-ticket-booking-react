import { expect, test } from 'vitest';
import { getLocationFromLocationExternal } from './location.converter';
import { ILocationExternal } from '../types/location';
import { ILocation } from '../../types';

test('getLocationFromLocationExternal should return the correct location object', () => {
    const locationExternal: ILocationExternal = {
        name: 'New York',
        shortCode: 'NY',
        id: 1,
    };

    const expectedLocation: ILocation = {
        id: '1',
        name: 'New York',
        shortCode: 'NY',
    };

    const location = getLocationFromLocationExternal(locationExternal);

    expect(location).toEqual(expectedLocation);
});
