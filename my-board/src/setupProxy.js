const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://15.164.219.180:8080",
      changeOrigin: true,
    })
  );
};
