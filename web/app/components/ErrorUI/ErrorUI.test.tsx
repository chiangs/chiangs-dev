// Testing library
import { render, screen } from '@testing-library/react';
// Component
import { ErrorUI } from './index';

describe('Error UI', () => {
    it('renders a heading', () => {
        // Arrange
        render(<ErrorUI />);
        // Act
        const heading = screen.getByRole('heading', {
            name: '???',
        });
        // Assert
        expect(heading).toBeInTheDocument();
    });
});
