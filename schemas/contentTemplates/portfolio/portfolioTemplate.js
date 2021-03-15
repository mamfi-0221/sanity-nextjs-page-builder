export default {
    name: 'portfolioTemplate',
    title: 'Portfolio Template',
    type: 'document',
    fields: [
        {
            name: 'templateName',
            title: 'Template Name',
            type: 'string'
        },
        {
            name: 'addPortfolioImg',
            title: 'Add Portfolio Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
            description: 'Important for SEO and accessibility if there are problems showing the image.',
            validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
            options: {
                isHighlighted: true
            }
        }
    ]

}