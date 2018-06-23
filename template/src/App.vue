<template>
  <div id="app">
    {{#router}}
    <router-view/>
    {{else}}
    <Home/>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import Home from 'views/Home'

{{/unless}}
export default {
  name: 'App'{{#router}}{{else}},
  components: {
    Home
  }{{/router}}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
