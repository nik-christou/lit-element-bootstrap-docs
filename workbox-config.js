module.exports = {
  directoryIndex: '.',
  clientsClaim: true,
  swDest: './service-worker.js',
  globDirectory: '.',
  globPatterns: [
    './index.html',
    './src/**/*',
    './web_assets/**/*',
    './web_modules/**/*'
  ],
  importWorkboxFrom: 'cdn', // change this to local
  cacheId: 'lit-element-bootstrap-docs',
  offlineGoogleAnalytics: false,
  cleanupOutdatedCaches: true,
  navigateFallback: './index.html'
};