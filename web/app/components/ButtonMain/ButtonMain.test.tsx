// Testing library
import { render, screen } from '@testing-library/react';
// Component
import { ButtonMain, ButtonMainProps } from './index';

describe('ButtonPrimary', () => {
    it('has the class primary', () => {
        // Arrange
        const expectedClass = `primary`;
        const label = `Test Button`;
        const props: ButtonMainProps = {
            clickHandler: jest.fn(),
        };
        render(<ButtonMain {...props}>{label}</ButtonMain>);
        // Act
        const button = screen.getByTestId('button');
        // Assert
        expect(button).toHaveClass(expectedClass);
        expect(button).toHaveTextContent(label);
    });
});
