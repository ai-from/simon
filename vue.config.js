module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/variables.sass"
          @import "@/styles/common.sass"
        `
      }
    }
  }
}