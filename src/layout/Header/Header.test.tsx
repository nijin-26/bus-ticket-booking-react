import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '../../utils';
import { Header } from '..';
import userEvent from '@testing-library/user-event';

describe('Header component testing', () => {
    it('should render the header component', () => {
        render(<Header />);
        const loginButton = screen.getByRole('button', { name: /login/i });
        const headerElement = screen.getByText(/bustle/i);
        expect(loginButton).toBeVisible();
        expect(headerElement).toBeVisible();
    });

    // it('should contain theme toggle button', async () => {
    //     render(<Header />);
    //     const themeButton = screen.getByRole('button', {
    //         name: /theme toggle/i,
    //     });
    //     expect(themeButton).toBeVisible();

    //     const spy = vi.spyOn(Header.prototype, 'handleThemeClick');

    //     await userEvent.click(themeButton);

    //     expect(spy).toHaveBeenCalledOnce();
    //     spy.mockRestore();
    // });
});
