# {{ name }}

> {{ description }}

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9527
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
{{#unit}}
```
base/scroll/scroll 组件如何使用呢？
```
<BScroll ref="scroll"
  :data="items"
  :scrollbar="scrollbarObj"
  :pullDownRefresh="pullDownRefreshObj"
  :pullUpLoad="pullUpLoadObj"
  :startY="parseInt(startY)"
  :click="click"
  @pullingDown="onPullingDown"
  @pullingUp="onPullingUp"
  @click="clickItem">
  <div>
    <router-link to="/news">去详情页</router-link>
    <h1 v-for="item in items" :key="item">{{item}}</h1>
    <!-- <div style="height: 30vh;background: red"></div>
    <div style="height: 30vh;background: blue"></div>
    <div style="height: 30vh;background: yellow"></div>
    <div style="height: 30vh;background: pink"></div>
    <div style="height: 30vh;background: skyblue"></div> -->
  </div>
</BScroll>
```

base/slide/slide 组件如何使用呢？
```
<Slide
  ref="slide"
  :autoPlay="isAutoPlay"
  :loop="isLoop"
  :showDot="isShowDot"
  :interval="interval"
  :threshold="threshold"
  :speed="speed">
  <div v-for="item in items" :key="item.id">
    <a :href="item.linkUrl">
      <img :src="item.picUrl">
    </a>
  </div>
</Slide>
```

恩 就酱紫~
