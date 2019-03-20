/*
 * @Author: mikey.liujiaxu 
 * @Date: 2019-03-13 21:17:34 
 * @Last Modified by: mikey.liujiaxu
 * @Last Modified time: 2019-03-18 13:44:42
 */
const path = require('path');
module.exports = {
  "proxy": {
    "/api": {
      "target": "http://localhost:7001",
      "pathRewrite": { "^/api":""},
      "changeOrigin": true
    }
  },
  "publicPath": "/",
  alias: {
    "view": path.resolve(__dirname, 'src/containers'),
    "@": path.resolve(__dirname, './src'),
    "comp": path.resolve(__dirname, 'src/components'),
    "com": path.resolve(__dirname, 'src/common'),
    "services": path.resolve(__dirname, 'src/services')
  }
};
