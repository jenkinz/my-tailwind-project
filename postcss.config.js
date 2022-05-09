// This file specifies the postcss plugins to use for the project.
module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        // strip unused css when compiling for production:
        process.env.NODE_ENV === 'production' && require('@fullhuman/postcss-purgecss')({
            content: [
                './public/**/*.{html,js}'
            ],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        })
    ]
}
