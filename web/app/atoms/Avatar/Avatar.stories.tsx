// Storybook
import type { ComponentMeta } from '@storybook/react';
// Types
import type { WebAccessibleImage } from '~types';
// Component
import AvatarMDXDocumentation from './AvatarMDXDocumentation.mdx';
import { Avatar as AvatarComponent } from './index';

export default {
    title: 'Atoms/Avatar',
    component: AvatarComponent,
    argTypes: {
        image: {
            control: 'object',
        },
        dimensions: {
            control: 'number',
        },
    },
    parameters: {
        docs: {
            page: AvatarMDXDocumentation,
        },
    },
} as ComponentMeta<typeof AvatarComponent>;

export const Avatar = (args: { image?: WebAccessibleImage; dimensions?: number }) => (
    <AvatarComponent {...args} />
);
