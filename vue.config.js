const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  chainWebpack: config => {
    config.module
        .rule('vue')
        .use('vue-loader')
        .tap(options => {
          options.compilerOptions = {
            ...options.compilerOptions,
            isCustomElement: tag => ['v-list-item-group'].includes(tag)
          }
          return options
        })
  },

  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
});
