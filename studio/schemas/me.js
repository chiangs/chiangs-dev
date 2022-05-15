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
            name: 'image',
            title: 'Image',
            type: 'image',
            description: 'Photo',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    title: 'Alternative Text',
                    name: 'alt',
                    type: 'string',
                },
            ],
        },
        {
            name: 'avatarDev',
            title: 'Avatar Dev',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    title: 'Alternative Text',
                    name: 'alt',
                    type: 'string',
                },
            ],
        },
        {
            name: 'avatarBusiness',
            title: 'Avatar Business',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    title: 'Alternative Text',
                    name: 'alt',
                    type: 'string',
                },
            ],
        },
        {
            name: 'avatarStudent',
            title: 'Avatar Student',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    title: 'Alternative Text',
                    name: 'alt',
                    type: 'string',
                },
            ],
        },
        {
            name: 'avatarContact',
            title: 'Avatar Contact',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    title: 'Alternative Text',
                    name: 'alt',
                    type: 'string',
                },
            ],
        },
        {
            name: 'avatarParty',
            title: 'Avatar Party',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    title: 'Alternative Text',
                    name: 'alt',
                    type: 'string',
                },
            ],
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
            of: [{ type: 'singleContent' }],
        },
        {
            name: 'whatILove',
            title: 'What I love',
            type: 'array',
            of: [{ type: 'singleContent' }],
        },
        {
            name: 'whatIDo',
            title: 'What I do',
            type: 'array',
            of: [{ type: 'singleContent' }],
        },
        {
            name: 'whatIBelieve',
            title: 'What I believe',
            type: 'array',
            of: [{ type: 'singleContent' }],
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
};
