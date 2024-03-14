import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../../utils';
import user from '@testing-library/user-event';
import LoadMore from './LoadMore';

describe('Load More Button', () => {
    it("Renders the button with text 'Load More'", () => {
        const mockProps = {
            resultLength: 20,
            page: '1',
            setPage: vi.fn(),
            btnLoading: false,
            setBtnLoading: vi.fn(),
        };

        render(<LoadMore {...mockProps} />);
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByText('Load More')).toBeVisible();
    });

    it('Shows loading and sets page when load more button is clicked', async () => {
        const mockProps = {
            resultLength: 20,
            page: '1',
            setPage: vi.fn(),
            btnLoading: false,
            setBtnLoading: vi.fn(),
        };

        render(<LoadMore {...mockProps} />);
        user.setup();
        const loadMoreBtn = screen.getByRole('button', { name: /load more/i });
        await user.click(loadMoreBtn);
        expect(mockProps.setBtnLoading).toHaveBeenCalledWith(true);
        expect(mockProps.setPage).toHaveBeenCalledWith('2');
    });

    it('Does not call setPage if total pages are reached', async () => {
        const mockProps = {
            resultLength: 10,
            page: '2',
            setPage: vi.fn(),
            btnLoading: false,
            setBtnLoading: vi.fn(),
        };

        render(<LoadMore {...mockProps} />);
        const loadMoreBtn = screen.getByRole('button', { name: /load more/i });
        await user.click(loadMoreBtn);
        expect(mockProps.setBtnLoading).toHaveBeenCalledWith(true);
        expect(mockProps.setPage).not.toHaveBeenCalled();
    });
});
