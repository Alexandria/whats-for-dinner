const withPWA = require('next-pwa')

module.exports = withPWA({
  reactStrictMode: true,
  pwa:{
    dest:"public",
    register:true,
    skipWaiting:true,
    disable: process.env.NODE_ENV === 'development',
    // Added below becuase https://github.com/shadowwalker/next-pwa/issues/288
    buildExcludes: [/middleware-manifest\.json$/],
    //importScripts:['/service-worker.js']
  }
})
