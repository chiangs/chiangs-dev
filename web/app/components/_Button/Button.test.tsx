// Testing library
import { render, screen } from '@testing-library/react';
// Component
import type { ButtonProps } from './index';
import { Button } from './index';

describe('Button', () => {
    it('renders a button with role and type and children passed', () => {
        // Arrange
        const label = `Button label`;
        const props: ButtonProps = {
            clickHandler: jest.fn(),
        };
        render(<Button {...props}>{label}</Button>);
        // Act
        const button = screen.getByTestId('button');
        // Assert
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(label);
    });
});
