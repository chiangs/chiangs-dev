// Components
import type { ButtonProps } from '../_Button';
import { Button } from '../_Button';

export interface ButtonMainProps extends ButtonProps {
    disabled?: false;
    name?: string | undefined;
    type?: 'submit' | 'reset' | 'button' | undefined;
    value?: string | ReadonlyArray<string> | number | undefined;
}

const defaultProps: ButtonMainProps = {
    buttonclass: 'primary',
    disabled: false,
    type: 'button',
    clickHandler: () => null,
};

export const ButtonMain: React.FC<ButtonMainProps> = (props: ButtonMainProps) => {
    const mergedProps: ButtonMainProps = {
        ...defaultProps,
        ...props,
    };
    return <Button {...mergedProps} />;
};
