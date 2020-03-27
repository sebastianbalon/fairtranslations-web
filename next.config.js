const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');

module.exports = {
  exportTrailingSlash: false,
  target: 'serverless',
  ...withSass(withCss()),
}