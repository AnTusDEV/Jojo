const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8081, // Thay đổi port tại đây, ví dụ: 8080, 3000, 8088, ...
    proxy: 'http://localhost:8081' // Cấu hình proxy (nếu cần)
  }
})
