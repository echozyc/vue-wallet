<template>
  <el-aside class="public-nav">
    <div class="public-nav-logo"><img src="../../assets/common/img/LOGO@2x.png" alt=""></div>
    <ul>
      <li @click="goto('/HomePage')" :class="{on:isCurrent('/HomePage')}">
        <div class="frame-style"></div>
        <img class="img-xuanzhong" src="../../assets/common/img/icon_shouye_xuanzhong@2x.png" alt="">
        <img class="img-weixuanzhong" src="../../assets/common/img/icon_shouye_weixuanzhong@2x.png" alt="">
        <span>首页</span>
      </li>
      <li @click="goto('/MyAssets')" :class="{on:isCurrent('/MyAssets')}">
        <div class="frame-style"></div>
        <img class="img-xuanzhong" src="../../assets/common/img/icon_zichan_xuanzhong@2x.png" alt="">
        <img class="img-weixuanzhong" src="../../assets/common/img/icon_zichan_weixuanzhong@2x.png" alt="">
        <span>我的资产</span>
      </li>
      <li @click="goto('/PersonalCenter')" :class="{on:isCurrent('/PersonalCenter')}">
        <div class="frame-style"></div>
        <img class="img-xuanzhong" src="../../assets/common/img/icon_wode_xuanzhong@2x.png" alt="">
        <img class="img-weixuanzhong" src="../../assets/common/img/icon_wode_weixuanzhong@2x.png" alt="">
        <span>个人中心</span>
      </li>
      <li @click="goto('/ApplicationCenter')" :class="{on:isCurrent('/ApplicationCenter')}">
        <div class="frame-style"></div>
        <img class="img-xuanzhong" src="../../assets/common/img/icon_yingyong_xuanzhong@2x.png" alt="">
        <img class="img-weixuanzhong" src="../../assets/common/img/icon_yingyong_weixuanzhong@2x.png" alt="">
        <span>应用中心</span>
      </li>
      <li @click="goto('/AssetEvaluation')" :class="{on:isCurrent('/AssetEvaluation')}">
        <div class="frame-style"></div>
        <img class="img-xuanzhong" src="../../assets/common/img/icon_zichanpinggu_xuanzhong@2x.png" alt="">
        <img class="img-weixuanzhong" src="../../assets/common/img/icon_zichanpinggu_weixuanzhong@2x.png" alt="">
        <span>资产评估</span>
      </li>
      <li @click="goto('/BlockProduction')" :class="{on:isCurrent('/BlockProduction')}">
        <div class="frame-style"></div>
        <img class="img-xuanzhong" src="../../assets/common/img/icon_qukuaishengchan_xuanzhong@2x.png" alt="">
        <img class="img-weixuanzhong" src="../../assets/common/img/icon_qukuaishengchan_weixuanzhong@2x.png" alt="">
        <span>区块生产</span>
      </li>
      <li @click="goto('/BlockBrowse')" :class="{on:isCurrent('/BlockBrowse')}">
        <div class="frame-style"></div>
        <img class="img-xuanzhong" src="../../assets/common/img/icon_qukuailiulan_xuanzhong@2x.png" alt="">
        <img class="img-weixuanzhong" src="../../assets/common/img/icon_qukuailiulan_weixuanzhong@2x.png" alt="">
        <span>区块浏览</span>
      </li>
      <li @click="goto('/Vote')" :class="{on:isCurrent('/Vote')}">
        <div class="frame-style"></div>
        <img class="img-xuanzhong" src="../../assets/common/img/icon_toupiao_xuanzhong@2x.png" alt="">
        <img class="img-weixuanzhong" src="../../assets/common/img/icon_toupiao_weixuanzhong@2x.png" alt="">
        <span>投票</span>
      </li>
      <li @click="goto('/TransferAccounts')" :class="{on:isCurrent('/TransferAccounts')}">
        <div class="frame-style"></div>
        <img class="img-xuanzhong" src="../../assets/common/img/icon_zhuanzhang_xuanzhong@2x.png" alt="">
        <img class="img-weixuanzhong" src="../../assets/common/img/icon_zhuanzhang_weixuanzhong@2x.png" alt="">
        <span>转账</span>
      </li>
      <li @click="goto('/Node')" :class="{on:isCurrent('/Node')}">
        <div class="frame-style"></div>
        <img class="img-xuanzhong" src="../../assets/common/img/icon_jiedian_xuanzhong@2x.png" alt="">
        <img class="img-weixuanzhong" src="../../assets/common/img/icon_jiedian_weixuanzhong@2x.png" alt="">
        <span>节点</span>
      </li>
    </ul>
  </el-aside>
</template>
<script>
export default {
  name: 'Aside',
  methods: {
    goto (path) {
      this.$router.push(path)
    },
    isCurrent (path) {
      return this.$route.path.search(path) === 0
    }
  }
}
</script>
<style lang="stylus">
  .public-nav
    width 260px !important
    height 100%
    .public-nav-logo
      width 260px
      height 100px
      line-height 100px
      font-size 18px
      font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
      background -webkit-linear-gradient(top,#3D7EFC 0,#0A5EFF 100%)
      background -moz-linear-gradient(top,#3D7EFC 0,#0A5EFF 100%)
      background -o-linear-gradient(top,#3D7EFC 0,#0A5EFF 100%)
      background linear-gradient(to bottom,#3D7EFC 0,#0A5EFF 100%);
    ul
      margin-top 17px
      .on
        background #F2F6FF
        color #0A5EFF
        .frame-style
          background #0A5EFF
        .img-weixuanzhong
          display none
      li
        width 260px
        height 75px
        line-height 75px
        font-size 18px
        box-sizing border-box
        color #666666
        cursor pointer
        position relative
        text-align left
        .frame-style
          width 5px
          height 54px
          background transparent
          float left
          margin-top 10px
        img
          position absolute
          left 59px
          top 50%
          margin-top -13px
        span
          margin-left 116px

</style>
