module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    'plugins': [
        ["prismjs",
            {
                "languages": ['html', "javascript", "css", "markup"],
                "plugins": ['line-highlight', 'match-braces', 'autolinker', 'inline-color', 'normalize-whitespace', 'copy-to-clipboard', 'show-language', 'line-numbers'],
                "css": true
            }
        ]
    ]
}