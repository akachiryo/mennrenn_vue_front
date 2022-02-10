module.exports = {
  transpileDependencies: ['vuetify'],
  publicPath: './',
  // baseUrl: '/aaa/view',
  css: {
    loaderOptions: {
      scss: {
        data: '@import "./src/styles/common/common.scss";',
      },
    },
  },
  configureWebpack: {
    devServer: {
      watchOptions: {
        poll: true,
      },
    },
  },
};

// module.exports = {
//   baseUrl: '/aaa/view',
// }
