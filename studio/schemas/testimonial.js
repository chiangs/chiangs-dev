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
        },
        {
            name: 'imageFallback',
            title: 'Image Fallback',
            type: 'image',
        },
        {
            name: 'imageL',
            title: 'Image Large',
            type: 'image',
        },
        {
            name: 'imageLFallback',
            title: 'Image Large Fallback',
            type: 'image',
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
