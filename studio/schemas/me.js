export default {
    name: 'me',
    title: 'Me',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
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
            type: 'blockContent',
        },
        {
            name: 'whatILove',
            title: 'What I love',
            type: 'blockContent',
        },
        {
            name: 'whatIDo',
            title: 'What I do',
            type: 'blockContent',
        },
        {
            name: 'whatIBelieve',
            title: 'What I believe',
            type: 'blockContent',
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
};
