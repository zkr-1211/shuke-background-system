const path = require("path");
const resolve = dir => path.join(__dirname, dir);
module.exports = {
  // lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set("vue$", "vue/dist/vue.esm.js")
      .set("@", resolve("src"))
      .set("@/assets", resolve("src/assets"))
      .set("@/components", resolve("src/components"))
      .set("@/views", resolve("src/views"))
      .set("@/router", resolve("src/router"))
      .set("@/store", resolve("src/store"));
  },
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
}
