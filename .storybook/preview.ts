import '../src/index.css'
export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
        default: 'white',
        values: [
            {
                name: 'white',
                value: '#ffffff',
            },
            {
                name: 'light grey',
                value: '#f2f2f2',
            },
            {
                name: 'dark grey',
                value: '#333333',
            },
            {
                name: 'black',
                value: '#000000',
            },
        ],
    },
    controls: {
        expanded: true,
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: {
            method: 'alphabetical',
            order: [
                'Get Started',
                [
                    'Introduction',
                    'Changelog',
                    'Templates',
                    ['Basic Markup', 'Grey Section', 'Alternating Sections', 'Grids And Columns'],
                ],
                'Components',
                'Cards & Lists',
                'Headers',
                'Footers',
                'Layouts',
                ['Main', 'Container', 'Article', 'Column', 'Aside', 'Panel', 'Stacked List'],
                'Forms',
                'Loading Screens',
                'Project Templates',
            ],
        },
    },
}
