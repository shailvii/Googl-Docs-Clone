const { ViewModuleSharp } = require('@material-ui/icons')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
// next.config.js
module.exports = {
  images: {
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'ssl.gstatic.com',
        port: '',
        pathname: '/docs/templates/thumbnails/docs-blank-googlecolors.png',
      },
    ],
  },
};