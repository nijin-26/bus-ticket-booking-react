import { test, expect } from 'vitest';
import { ITicketStatusExternal } from '../types/ticket.ts';
import { ITicketStatus } from '../../types';
import { getTicketStatusFromExternal } from './ticket.converter.ts';

test('getTicketStatusFromExternal should return the correct auth data', () => {
    const status: ITicketStatusExternal = ITicketStatusExternal.Confirmed;
    const expectedStatus = ITicketStatus.CONFIRMED;
    expect(getTicketStatusFromExternal(status)).toEqual(expectedStatus);
});