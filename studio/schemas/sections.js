export default {
    name: 'section',
    title: 'Section',
    type: 'document',
    fields: [
        {
            name: 'sectionName',
            title: 'Section Name',
            type: 'string',
        },
        {
            name: 'sectionId',
            title: 'Id',
            type: 'string',
        },
        {
            name: 'sectionContent',
            title: 'Section Content',
            type: 'array',
            of: [{ type: 'singleContent' }],
        },
    ],
};
