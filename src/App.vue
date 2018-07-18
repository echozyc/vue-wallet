<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
  @import 'assets/common/css/base.css'
  @import 'assets/iconfont/iconfont.css'
  #app
    min-height 800px
    min-width 1360px
</style>
