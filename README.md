### 自定义你的 vue 模板

vue custom template design for myself

出发点：本来在使用 vue init webpack XXX初始化项目的时候，总是要拿过来修改

1. 配置alias

2. 修改router/index页为 views/Home (原来的是 @/components/HelloWorld)

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
4. 是否需要使用 vw 出来移动端兼容(可选)
5. 安装vuex(可选)
6. 安装sass(可选)
7. 安装better-scroll(可选)
8. 提供 scroll 和 slider 模板直接上手使用,请期待readme 的 使用说明以及更新
9. 安装axios(可选)
10. 安装jsonp(可选)

### How to use

```
vue init CracKerMe/vue-tpl <your project name>
```
