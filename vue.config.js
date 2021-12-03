module.exports = {
    devServer: {
      proxy: {
        '^/backend': {
          target: 'http://localhost:5000',
          changeOrigin: true,
          logLevel: 'debug',
          pathRewrite: { '^/backend': '/' },
        },
      },
    },
  }