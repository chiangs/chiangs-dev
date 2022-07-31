import type { ButtonProps } from './index';
import { Button } from './index';

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Button',
    component: Button,
};

export const Primary = () => {
    const props: ButtonProps = {
        buttonclass: 'primary',
        disabled: false,
        name: 'Button',
        type: 'button',
        clickHandler: () => null,
    };

    return <Button {...props}>{props.name}</Button>;
};

export const Alt = () => {
    const props: ButtonProps = {
        buttonclass: 'alt',
        disabled: false,
        name: 'Button',
        type: 'button',
        clickHandler: () => null,
    };

    return <Button {...props}>{props.name}</Button>;
};
