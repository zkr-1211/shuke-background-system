const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  assetsDir: 'static',
  parallel: false,
  publicPath: isProd ? '/' : '/',
  // lintOnSave: false,
  chainWebpack: config => {
    config.output.filename('static/js/[name].[hash:6].js').end()
    config.output.chunkFilename('static/js/[name].[hash:6].js').end() // 修改生产配置
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolve('src'))
      .set('@/assets', resolve('src/assets'))
      .set('@/components', resolve('src/components'))
      .set('@/views', resolve('src/views'))
      .set('@/router', resolve('src/router'))
      .set('@/store', resolve('src/store'))
    if (isProd) {
      config.plugin('extract-css').tap(args => [
        {
          filename: `static/css/[name].[hash:6].css`,
          chunkFilename: `static/css/[name].[hash:6].css`
        }
      ])
      config.optimization.splitChunks({
        chunks: 'all',
        minSize: 30000,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '-',
        name: true
      })
      // config.module.rules.delete('svg')
      // config.module
      //   .rule('icons')
      //   .test(/\.svg$/)
      //   .include.add(resolve('src/assets/icons/svg'))
      //   .end()
      //   .use('svg-sprite-loader')
      //   .loader('svg-sprite-loader')
      //   .options({
      //     symbolId: 'icon-[name]'
      //   })
      //   .end()
    }
  },
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         require('postcss-pxtorem')({
  //           rootValue({ file }) {
  //             return file.indexOf('vant') !== -1 ? 37.5 : 75
  //           },
  //           propList: ['*', '!border*'],
  //           selectorBlackList: ['.px-']
  //           // exclude: /node_modules/i
  //         })
  //       ]
  //     },
  //     sass: {
  //       prependData: `
  //         @import "@/assets/styles/common.scss";
  //       `
  //     }
  //   }
  // }
  // 代理
  // devServer:{
  //   proxy:{
  //     '/api':{
  //        target:'http://127.0.0.1:8000',
  //        ws:true,
  //        changOrigin:true,
  //        pathRewrite:{
  //           '^/api': '',
  //        }

  //      }
  //   }
  // }
  productionSourceMap: false,
  // transpileDependencies: [
  //   /[/\\]node_modules[/\\]event-emitter3/,
  //   /[/\\]node_modules[/\\]@vueuse/,
  //   /[/\\]node_modules[/\\]autotrack/,
  //   /[/\\]node_modules[/\\]dom-utils/
  // ]
}
