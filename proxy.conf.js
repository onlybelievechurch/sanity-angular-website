const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://pa3cm5wu.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;