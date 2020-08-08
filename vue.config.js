module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles/_stabil-style-global.scss";'
      }
    }
  }
}
