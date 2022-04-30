import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  proxy: {
    "/wallpaper": { // 标识需要进行转换的请求的url
     "target": "http://cn.bing.com/HPImageArchive.aspx", // 服务端域名
     "changeOrigin": true, // 允许域名进行转换
     "pathRewrite": { "^/wallpaper": ''}  // 将请求url里的ci去掉
    }
  },
  fastRefresh: {},
});
