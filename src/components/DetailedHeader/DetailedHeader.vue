<template>
  <!--首页 Header-->
  <div class="HomePageHeader">
    <span class="TextTitle">首页</span>
    <div class="Avatar"></div>
    <div class="Input">
      <img src="../../assets/common/img/sousuo.png" alt="">
      <input type="text" placeholder="请输入搜索内容">
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailedHeader'
}
</script>
<style  lang="stylus">
    .HomePageHeader
      height 100px
      overflow hidden
      background #ffffff
      line-height 100px
      .TextTitle
        color #333333
        font-size 36px
        float left
        margin-left 74px
      .Avatar
        width 40px
        height 40px
        float right
        margin-right 100px
        background #C81623
        margin-top 30px
        border-radius 50%
        overflow hidden
      .Input
        width 370px
        height 46px
        float right
        margin-right 41px
        margin-top 27px
        position relative
        img
          position absolute
          top 10px
          left 104px
          z-index 3
          cursor pointer
        input
          width 370px
          height 46px
          border-radius 23px
          background #F4F6F8
          position absolute
          top 0
          left 0
          font-size 18px
          color rgba(192,192,192,1)
          padding-left 159px
          box-sizing border-box

</style>
