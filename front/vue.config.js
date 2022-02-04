module.exports = {
  transpileDependencies: ['vuetify'],
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
  publicPath: '/vue-cli-app'
}

// vue-cli-ts-app
module.exports = {
  publicPath: '/vue-cli-ts-app'
}