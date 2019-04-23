module.exports = {
    staticFileGlobs: [
        '/index.html',
        '/src/manifest.json',
        '/src/icons/**/*',
        '/src/img/**/*',
        '/src/views/**/*',
        '/src/component/**/*',
        '/node_modules/lit-html/**/*',
        '/node_modules/lit-element/**/*',
        '/node_modules/pwa-helpers/**/*',
        '/node_modules/popper.js/dist/esm/**/*',
        '/node_modules/lit-element-bootstrap/**/*',
        '/node_modules/@webcomponents/webcomponentsjs/**',
        '/node_modules/prismjs/components/prism-core.min.js',
        '/node_modules/prismjs/components/prism-markup.min.js',
        '/node_modules/prismjs/components/prism-clike.min.js',
        '/node_modules/prismjs/components/prism-javascript.min.js',
        '/node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min.js'
    ],
    runtimeCaching: [
        {
            urlPattern: /home/,
            handler: 'networkFirst'
        },
        {
            urlPattern: /component\/\.*[a-z]*/,
            handler: 'networkFirst'
        },
        {
            urlPattern: /behaviour\/\.*[a-z]*/,
            handler: 'networkFirst'
        },
        {
            urlPattern: /layout\/\.*[a-z]*/,
            handler: 'networkFirst'
        }
    ],
    navigateFallback: '/index.html',
    navigateFallbackWhitelist: [/^(?!.*\.js$|\/data\/).*/]
  }