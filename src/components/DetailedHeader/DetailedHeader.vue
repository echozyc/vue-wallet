<template>
  <!--首页 Header => All Header-->
  <div class="HomePageHeader">
    <span class="TextTitle">{{title.text1}}</span>
    <span class="TextTitleMin">&nbsp{{title.text2}}</span>
    <div class="Avatar">
      <img src="../../assets/common/img/touxiang_small@2x.png" alt="">
    </div>
    <div class="Input">
      <input type="text" :placeholder="$t('QSRSSNR')">
      <img src="../../assets/common/img/sousuo.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailedHeader',
  props:['title']
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
      .TextTitleMin
        color #333333
        font-size 20px
        float left
        margin-top 6px
        font-weight normal
      .Avatar
        width 40px
        height 40px
        float right
        margin-right 100px
        margin-top 30px
        overflow hidden
        img
          width 40px
          height 40px
          float left
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
