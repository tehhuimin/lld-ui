module.exports = {
  publicPath: "/",
  devServer: {
    proxy: {
      "/api/": {
        target: "http://127.0.0.1:7001/",
        secure: false,
        pathRewrite: {
          "^/api/": "/"
        },
        changeOrigin: true
      }
    }
  },
  pages: {
    index: {
      // 页面的入口
      entry: "./src/index/main.js",
      // 页面的模板
      template: "./public/index.html",
      // build时输出的文件名
      filename: "index.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "守护爱情的长明山仙女",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    admin: {
      entry: "./src/admin/main.js",
      template: "./public/index.html",
      filename: "admin.html",
      title: "守护爱情的管理后台",
      chunks: ["chunk-vendors", "chunk-common", "admin"]
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/variable.scss"`
      },
      scss: {
        prependData: `@import "~@/assets/variables.scss";`
      }
    }
  }
};
