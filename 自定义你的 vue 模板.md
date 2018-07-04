## 自定义你的 vue 模板

出发点：本来在使用 `vue init webpack XXX`初始化项目的时候，总是要拿过来修改

1. 配置alias

2. 修改router/index页为 `views/Home` (原来的是 `@/components/HelloWorld`)

3. 调整 src 下的目录结构

   ```
   src
   ├── /assets/
   ├── /components/
   ├── /router/
   ├── /store/
   ├── /views/
   ├── /App.vue
   ├── /main.js 
   ```

4. 安装vuex(可选)

5. 安装sass(可选)