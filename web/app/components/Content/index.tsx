import type { PortableTextComponents } from '@portabletext/react';
import { PortableText } from '@portabletext/react';

/**
 * This is a component wrapper for the PortableText used to populate Block content from Sanity
 * @param param0
 * @returns
 */
export const Content = ({
    value,
    components,
}: {
    value: any;
    components?: PortableTextComponents;
}) => <PortableText value={value} components={components} />;
