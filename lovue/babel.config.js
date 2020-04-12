module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    'plugins': [
        ["prismjs",
            {
                "languages": ['html', "javascript", "css", "markup", 'bash'],
                "plugins": ['match-braces', 'autolinker', 'inline-color', 'normalize-whitespace', 'copy-to-clipboard', 'show-language', 'line-numbers', 'line-highlight'],
                "css": true
            }
        ]
    ]
}