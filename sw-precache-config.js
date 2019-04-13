module.exports = {
    staticFileGlobs: [
        'src/index.html',
        'src/icons/**/*',
        'src/views/**/*',
        'src/component/**/*',
        'src/manifest.json',
        'src/lit-element-bootstrap-docs.js',
        'node_modules/lit-html/**/*',
        'node_modules/lit-element/**/*',
        'node_modules/pwa-helpers/**/*',
        'node_modules/popper.js/dist/esm/**/*',
        'node_modules/lit-element-bootstrap/**/*',
        'node_modules/@webcomponents/webcomponentsjs/**',
        'node_modules/prismjs/components/prism-core.min.js',
        'node_modules/prismjs/components/prism-markup.min.js',
        'node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min.js'
    ],
    "runtimeCaching": [{
        "urlPattern": "/",
        "handler": "networkFirst"
    }],
    navigateFallback: 'src/index.html',
    navigateFallbackWhitelist: [/^(?!.*\.js$|\/data\/).*/]
}