const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/custom/api',
    createProxyMiddleware({
      target: 'http://poetry.apiopen.top/sentences',
      changeOrigin: true,
      pathRewrite: { '^/custom/api': '' },
    })
  );
};