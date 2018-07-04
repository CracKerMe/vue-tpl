如果你想用到 scroll slider组件，需要安装better-scroll 

建议安装版本：

```
"better-scroll": "^1.12.4"
```



使用实例 讲解 以后再补充

```vue
<Scroll :data="songLists" class="recommend-content" ref="scrollWrapper">
      <div>
        <div class="banner" v-if="recommends.length" refs="banners">
          <Slider>
            <div v-for="(item, index) in recommends" :key="index">
              <a :href="item.url">
                <img class="needsclick" @load="loadImage" :src="item.pic">
              </a>
            </div>
          </Slider>
        </div>
        <div class="list-view">
          <List :songLists="songLists"></List>
        </div>
      </div>
    </Scroll>
```

