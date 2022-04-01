// React
import { ButtonHTMLAttributes } from 'react';

/**
 * Should be extended by a common component.
 * Not to be exposed to routes as a standalone component.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonclass?: 'primary' | 'alt' | 'cta';
    clickHandler: () => any;
    customClasses?: string[];
}
export const Button: React.FC<ButtonProps> = ({
    clickHandler,
    buttonclass = 'primary',
    customClasses = [],
    ...props
}: ButtonProps) => (
    <button
        className={['button', buttonclass, [...customClasses]].join(' ')}
        data-testid="button"
        {...props}
        onClick={clickHandler}
    >
        <div className="button--content">{props.children}</div>
    </button>
);
