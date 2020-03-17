module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    'plugins': [
        ["prismjs",
            {
                "languages": ['html', "javascript", "css", "markup"], //语言类型
                "plugins": ['inline-color', 'copy-to-clipboard', 'show-language'], //prism插件
                "theme": "tomorrow", //主题！！
                "css": true
            }
        ]
    ]
}