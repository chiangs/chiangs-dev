export default {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        {
            name: 'author',
            title: 'Author',
            type: 'string',
        },
        {
            name: 'position',
            title: 'Position',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            description: 'For small screens (WEBP)',
            fields: [
                {
                    title: 'Alternative Text',
                    name: 'alt',
                    type: 'string',
                },
            ],
        },
        {
            name: 'imageFallback',
            title: 'Image Fallback',
            type: 'image',
            description: 'For small screens (PNG / JPEG)',
            fields: [
                {
                    title: 'Alternative Text',
                    name: 'alt',
                    type: 'string',
                },
            ],
        },
        {
            name: 'imageL',
            title: 'Image Large',
            type: 'image',
            description: 'For large screens (WEBP)',
            fields: [
                {
                    title: 'Alternative Text',
                    name: 'alt',
                    type: 'string',
                },
            ],
        },
        {
            name: 'imageLFallback',
            title: 'Image Large Fallback',
            type: 'image',
            description: 'For large screens (PNG / JPEG)',
            fields: [
                {
                    title: 'Alternative Text',
                    name: 'alt',
                    type: 'string',
                },
            ],
        },
        {
            name: 'testimonial',
            title: 'Testimonial',
            type: 'array',
            of: [{ type: 'singleContent' }],
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url',
        },
    ],
};
