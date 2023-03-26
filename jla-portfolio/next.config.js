const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/jla-portfolio' : '',
  assetPrefix: isProd ? '/jla-portfolio/' : '',
};