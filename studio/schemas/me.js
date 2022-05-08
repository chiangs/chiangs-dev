export default {
    name: 'me',
    title: 'Me',
    type: 'document',
    fields: [
        {
            name: 'firstName',
            title: 'First Name',
            type: 'string',
        },
        {
            name: 'lastName',
            title: 'Last Name',
            type: 'string',
        },
        {
            name: 'fullName',
            title: 'Full Name',
            type: 'string',
        },
        {
            name: 'profile',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'avatar',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'keyTitles',
            title: 'Key Titles',
            type: 'array',
            of: [
                {
                    title: 'title',
                    type: 'string',
                },
            ],
        },
        {
            name: 'bio',
            title: 'Bio',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                    lists: [],
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
};
