module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    'plugins': [
        ["prismjs",
            {
                "languages": ['html', "javascript", "css", "markup"],
                "plugins": ['match-braces', 'autolinker', 'inline-color', 'normalize-whitespace', 'copy-to-clipboard', 'line-highlight', 'show-language', 'line-numbers'],
                "css": true
            }
        ]
    ]
}