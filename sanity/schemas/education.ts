export default {
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'subtitle',
            type: 'string',
            title: 'Subtitle',
        },
        {
            name: 'desc',
            type: 'text',
            title: 'Description',
        },
        {
            name: 'yearstart',
            type: 'date',
            title: 'Year Start',
        },
        {
            name: 'yearend',
            type: 'date',
            title: 'Year End',
            hidden: ({ parent, value }) => parent?.present
        },
        {
            name: 'present',
            type: 'boolean',
            title: 'Present',
        },
        {
            name: 'tags',
            type: 'array',
            of: [{
                type: "string"
            }
            ],
            title: "Tags",
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
        },
        {
            name: 'link',
            type: 'string',
            title: "Link",
        },

    ]
}