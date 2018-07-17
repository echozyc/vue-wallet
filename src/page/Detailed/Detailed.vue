<template>
    <div class="ap">
      <el-container>
        <Aside></Aside>
        <el-main class="main-container">
          <router-view></router-view>
        </el-main>
      </el-container>
    </div>
</template>
<script>
import Aside from '../../components/Aside/Aside'
export default {
  name: 'Detailed',
  components: {
    Aside
  }
}
</script>
<style lang="stylus">
  .ap
    /*font-family 'Avenir', Helvetica, Arial, sans-serif*/
    /*-webkit-font-smoothing antialiased*/
    /*-moz-osx-font-smoothing grayscale*/
    /*text-align center*/
    /*color #ffffff*/
    /*font-weight bold*/
    height 100%
    width 100%
    position relative
    .el-container
      height 100%
      .main-container
        background #f2f6ff
        padding 0
        min-width 1100px
</style>
