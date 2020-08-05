## 自定义你的 vue 模板

出发点：本来在使用 `vue init webpack XXX`初始化项目的时候，总是要拿过来修改

1. 配置alias

2. 修改router/index页为 `views/Home` (原来的是 `@/components/HelloWorld`)

3. 调整 src 下的目录结构

   ```
   src
   ├── /assets/
   ├── /base/
   ├── /components/
   ├── /router/
   ├── /store/
   ├── /views/
   ├── /App.vue
   ├── /main.js 
   ```

4. 安装vuex(可选)

5. 安装sass(可选)

6. 安装better-scroll(可选)
   
    提供 `scroll` 和 `slider` 模板直接上手使用,请期待readme 的 使用说明以及更新

7. 安装axios(可选)

8. 安装jsonp(可选)



## 推荐 vue 插件安装

**nprogress** 顶部载入进度条

``` javascript
import router from './router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(transition => {
  NProgress.done()
})
```



**v-charts**   Charts类插件

https://v-charts.js.org/ 



**vue-gemini-scrollbar**  美化滚动条

```javascript
import GeminiScrollbar from 'vue-gemini-scrollbar';
Vue.use(GeminiScrollbar);
new Vue.$geminiScrollbar({
	element: document.body
}).create();
```



**webpack-bundle-analyzer**  构件打包大小分析

```javascript
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin


plugins: [
	new BundleAnalyzerPlugin(),
	......
]
```



新增安装 filters

