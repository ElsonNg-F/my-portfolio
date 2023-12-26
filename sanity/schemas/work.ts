export default {
    name: 'work',
    title: 'Work',
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
            name: 'date',
            type: 'date',
            title: 'Date',
        },
        {
            name: 'category',
            type: 'array',
            of: [{
                type: "string"
            }
            ],
            title: "Category",
        },
        {
            name: 'images',
            type: 'array',
            of: [{
                type: "image"
            }
            ],
            title: "Image(s)"
        },
        {
            name: 'link',
            type: 'string',
            title: "Page Link",
        },
        {
            name: 'videolink',
            type: 'string',
            title: "Video Link",
        }
    ]
}