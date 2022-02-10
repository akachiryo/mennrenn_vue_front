module.exports = {
  transpileDependencies: ['vuetify'],
  // publicPath: './',
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

module.exports = {
  baseUrl: '/aaa/view',
}
