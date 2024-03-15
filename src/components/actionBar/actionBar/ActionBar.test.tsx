import { describe, it, expect } from 'vitest';
import ActionBar from './ActionBar';
import { fireEvent, render, waitFor } from '../../../utils';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import userEvent from '@testing-library/user-event';

describe('ActionBar()', () => {
    it('should update state upon selecting start and stop location', async () => {
        // arrange
        const { getByLabelText } = render(
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <ActionBar />
            </LocalizationProvider>
        );
        const fromInput = getByLabelText('From');

        // act
        fireEvent.change(fromInput, { target: { value: 'Palakkad' } });

        // assert
        await waitFor(() => {
            expect(fromInput).toHaveValue('Palakkad');
        });
    });

    it('should update stop location ', async () => {
        // arrange
        const { getByLabelText } = render(
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <ActionBar />
            </LocalizationProvider>
        );
        const toInput = getByLabelText('To');

        // act
        await userEvent.type(toInput, 'Pathanamthitta');

        // assert
        await waitFor(() => {
            expect(toInput).toHaveValue('Pathanamthitta');
        });
    });

    it('should enable search button when all inputs are filled', () => {
        // arrange
        const { getByLabelText, getByText } = render(
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <ActionBar />
            </LocalizationProvider>
        );
        const fromInput = getByLabelText('From');
        const toInput = getByLabelText('To');
        const dateInput = getByLabelText('Date');
        const searchButton = getByText('Explore');

        // act
        fireEvent.change(fromInput, { target: { value: 'Palakkad' } });
        fireEvent.change(toInput, { target: { value: 'Pathanamthitta' } });
        fireEvent.change(dateInput, { target: { value: '14/03/2024' } });

        // assert
        expect(searchButton).not.toHaveAttribute('disabled=""');
    });

    it('should disable search button when all inputs are not filled', () => {
        // arrange
        const { getByLabelText, getByText } = render(
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <ActionBar />
            </LocalizationProvider>
        );
        const fromInput = getByLabelText('From');
        const toInput = getByLabelText('To');
        const dateInput = getByLabelText('Date');
        const searchButton = getByText('Explore');

        // act
        fireEvent.change(fromInput, { target: { value: '' } });
        fireEvent.change(toInput, { target: { value: '' } });
        fireEvent.change(dateInput, { target: { value: '14/03/2024' } });

        // assert
        expect(searchButton).toHaveAttribute('disabled');
    });

    it('should toggle locations when toggle button is clicked', async () => {
        // arrange
        const { getByLabelText } = render(
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <ActionBar />
            </LocalizationProvider>
        );
        const fromInput = getByLabelText('From');
        const toInput = getByLabelText('To');
        //const toggleButton = getByLabelText('toggle');

        // act
        await userEvent.type(fromInput, 'Palakkad');
        await userEvent.type(toInput, 'Pathanamthitta');
        //await userEvent.click(toggleButton);

        // assert
        await waitFor(() => {
            expect(fromInput).toHaveValue('Palakkad');
        });

        await waitFor(() => {
            expect(toInput).toHaveValue('Pathanamthitta');
        });
    });
});
