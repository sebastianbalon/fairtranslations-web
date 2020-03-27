const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');

module.exports = {
  exportTrailingSlash: true,
  /*exportPathMap: () => ({
    '/p/o-firme': { page: '/p/o-firme' }
  }),*/
  target: 'serverless',
  ...withSass(withCss()),
}