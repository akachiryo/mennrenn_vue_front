module.exports = {
  transpileDependencies: ['vuetify'],
  publicPath: './',
  pages: {
    index: {
      entry: "src/main.js",
      title: 'MennRenn',
    }
  },
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
