// Components
import { Button, ButtonProps } from '../_Button';

export interface ButtonCTAProps extends ButtonProps {
    disabled?: false;
    name?: string | undefined;
    type?: 'submit' | 'reset' | 'button' | undefined;
    value?: string | ReadonlyArray<string> | number | undefined;
}

export const ButtonCTA: React.FC<ButtonCTAProps> = (props: ButtonCTAProps) => {
    const defaultProps: ButtonCTAProps = {
        ...props,
        buttonclass: 'cta',
        disabled: false,
        type: 'submit',
    };
    return <Button {...defaultProps} />;
};
