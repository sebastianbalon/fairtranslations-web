const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');

module.exports = {
  exportTrailingSlash: false,
  /*exportPathMap: () => ({
    '/p/o-firme': { page: '/p/o-firme' }
  }),*/
  target: 'serverless',
  ...withSass(withCss()),
}