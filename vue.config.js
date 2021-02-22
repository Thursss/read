module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  configureWebpack: {
    // 配置路径相关的时候用resolve 可以解决路径相关的问题
    resolve: {
      alias: {
        // 默认有@  他指向的是：src
        '~': "/static",
        assets: "@/assets",
        components: "@/components",
        views: "@/views",
      }
    }
  }
}
