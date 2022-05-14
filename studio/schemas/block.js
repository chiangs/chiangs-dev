export default {
    title: 'SingleContent',
    name: 'singleContent',
    type: 'block',
    // Styles let you set what your user can mark up blocks with. These
    // correspond with HTML tags, but you can set any title or value
    // you want and decide how you want to deal with it where you want to
    // use your content.
    styles: [
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Partial', value: 'span' },
        { title: 'Normal', value: 'p' },
        { title: 'Small', value: 'small' },
        { title: 'Code', value: 'mono' },
        { title: 'Quote', value: 'blockquote' },
    ],
    lists: [{ title: 'Bullet', value: 'bullet' }],
    // Marks let you mark up inline text in the block editor.
    marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
            { title: 'Strong', value: 'strong' },
            { title: 'Emphasis', value: 'em' },
            { title: 'Code', value: 'code' },
            {
                title: 'Highlight',
                value: 'highlight',
                blockEditor: {
                    icon: () => 'H',
                },
            },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
            {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                    {
                        title: 'URL',
                        name: 'href',
                        type: 'url',
                    },
                ],
            },
        ],
    },
};
