// React
import type { ButtonHTMLAttributes } from 'react';

/**
 * Should be extended by a common component.
 * Not to be exposed to routes as a standalone component.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    clickHandler: () => any;
    variant?: 'primary' | 'alt' | 'cta';
    type?: 'submit' | 'reset' | 'button' | undefined;
    label?: string;
    isDisabled?: boolean;
    customClasses?: string[];
    value?: string | ReadonlyArray<string> | number | undefined;
}

const defaultProps: ButtonProps = {
    variant: 'primary',
    label: 'button',
    type: 'button',
    isDisabled: false,
    clickHandler: () => null,
    customClasses: [],
};

export const Button: React.FC<ButtonProps> = (props: ButtonProps | Partial<ButtonProps>) => {
    const COMPONENT_NAME = 'button';
    const { variant, label, type, isDisabled, clickHandler, customClasses } = {
        ...defaultProps,
        ...props,
    };
    const classes = [COMPONENT_NAME, variant, [...(customClasses || [])]].join(' ');
    const handleClick = () => {
        if (isDisabled) return;
        clickHandler();
    };

    return (
        <button
            className={classes}
            data-testid={COMPONENT_NAME}
            type={type}
            disabled={isDisabled}
            onClick={handleClick}
        >
            <div className={`${COMPONENT_NAME}--content`}>{props.children || label}</div>
        </button>
    );
};
