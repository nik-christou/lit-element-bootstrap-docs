module.exports = {
    staticFileGlobs: [
        '/index.html',
        '/manifest.json',
        '/views/**/*',
        '/component/**/*',
        '/node_modules/lit-element-bootstrap/**/*',
        '/node_modules/@webcomponents/webcomponentsjs/**',
        '/node_modules/prismjs/components/prism-core.min.js',
        './node_modules/prismjs/components/prism-markup.min.js',
        './node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min.js'
    ],
    navigateFallback: '/index.html',
    navigateFallbackWhitelist: [/^(?!.*\.js$|\/data\/).*/]
  }