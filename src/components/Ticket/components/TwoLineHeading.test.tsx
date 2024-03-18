import { TwoLineHeading } from './TwoLineHeading';
import { describe, it, expect } from 'vitest';
import { render, screen } from '../../../utils';

describe('TwoLineHeading', () => {
    it('renders title and value correctly', () => {
        const title = 'Test Title';
        const value = 'Test Value';
        render(<TwoLineHeading title={title} value={value} />);
        const titleElement = screen.getByText(title);
        const valueElement = screen.getByText(value);
        expect(titleElement).toBeInTheDocument();
        expect(valueElement).toBeInTheDocument();
    });
});
