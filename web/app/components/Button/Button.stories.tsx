import { ComponentMeta } from '@storybook/react';
import type { ButtonProps } from './index';
import { Button } from './index';

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>;

export const CTA = () => {
    const props: ButtonProps = {
        variant: 'cta',
        isDisabled: false,
        label: 'Button',
        type: 'submit',
        clickHandler: () => null,
    };

    return <Button {...props} />;
};

export const Primary = () => {
    const props: ButtonProps = {
        variant: 'primary',
        isDisabled: false,
        label: 'Button',
        type: 'button',
        clickHandler: () => null,
    };

    return <Button {...props} />;
};

export const Alternate = () => {
    const props: ButtonProps = {
        variant: 'alt',
        isDisabled: false,
        label: 'Button',
        type: 'button',
        clickHandler: () => null,
    };

    return <Button {...props} />;
};
