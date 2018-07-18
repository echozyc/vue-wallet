<template>
  <div class="ApplicationCenterWrap">
    <!--应用中心Header-->
    <DetailedHeader :title='title'></DetailedHeader>
    <!--应用中心Main-->
    <div class="ApplicationCenterMain">
      <!--导航 nav-->
      <div class="ApplicationCenterContentNav">
        <div class="zichangaiyao"  @click="show('isShowApplicationList')" :class="{on:active == 'isShowApplicationList'}">
          <span>应用列表</span>
        </div>
        <div class="zhucefaxing"  @click="show('isShowAlreadyInstalled')" :class="{on:active == 'isShowAlreadyInstalled'}">
          <span>已安装应用列表</span>
        </div>
      </div>

      <div class="ContentWrap">
        <!--应用列表-->
        <div class="ApplicationList" v-show="active == 'isShowApplicationList'">
          <!--table表格 组件-->
          <table border="0" width="100%" cellpadding="20" class="TableFir">
            <tr>
              <td>图标</td>
              <td>名称</td>
              <td>描述</td>
              <td>ID</td>
              <td>类型</td>
              <td>余额详情</td>
              <td>源码</td>
            </tr>
            <tr class="HomePageContent">
              <td>123456</td>
              <td>ACE</td>
              <td>stan</td>
              <td>sendi</td>
              <td>通用</td>
              <td @click="isShowBalancePopup = !isShowBalancePopup">
                <span>详情</span>
              </td>
              <td>
                <span>点击下载</span>
              </td>
            </tr>
            <tr class="HomePageContent">
              <td>123456</td>
              <td>ACE</td>
              <td>stan</td>
              <td>sendi</td>
              <td>通用</td>
              <td @click="isShowBalancePopup = !isShowBalancePopup">
                <span>详情</span>
              </td>
              <td>
                <span>点击下载</span>
              </td>
            </tr>
            <tr class="HomePageContent">
              <td>123456</td>
              <td>ACE</td>
              <td>stan</td>
              <td>sendi</td>
              <td>通用</td>
              <td @click="isShowBalancePopup = !isShowBalancePopup">
                <span>详情</span>
              </td>
              <td>
                <span>点击下载</span>
              </td>
            </tr>
          </table>
        </div>
        <!--已安装列表-->
        <div class="AlreadyInstalled" v-show="active == 'isShowAlreadyInstalled'">
          <!--table表格 组件-->
          <table border="0" width="100%" cellpadding="20" class="TableFir">
            <tr>
              <td>图标</td>
              <td>名称</td>
              <td>描述</td>
              <td>ID</td>
              <td>类型</td>
              <td>余额详情</td>
              <td>源码</td>
            </tr>
            <tr class="HomePageContent">
              <td>123456</td>
              <td>ACE</td>
              <td>stan</td>
              <td>sendi</td>
              <td>通用</td>
              <td @click="isShowBalancePopup = !isShowBalancePopup">
                <span>详情</span>
              </td>
              <td>
                <span>点击下载</span>
              </td>
            </tr>
            <tr class="HomePageContent">
              <td>123456</td>
              <td>ACE</td>
              <td>stan</td>
              <td>sendi</td>
              <td>通用</td>
              <td @click="isShowBalancePopup = !isShowBalancePopup">
                <span>详情</span>
              </td>
              <td>
                <span>点击下载</span>
              </td>
            </tr>
            <tr class="HomePageContent">
              <td>123456</td>
              <td>ACE</td>
              <td>stan</td>
              <td>sendi</td>
              <td>通用</td>
              <td @click="isShowBalancePopup = !isShowBalancePopup">
                <span>详情</span>
              </td>
              <td>
                <span>点击下载</span>
              </td>
            </tr>
          </table>
        </div>
      </div>

    </div>
    <!--余额详情弹出层-->
    <div class="BalancePopup" v-show="isShowBalancePopup">
      <div class="BalancePopupContent">
        <p class="Text">
          <span>余额详情</span>
        </p>
        <table border="0" width="100%" cellpadding="20" id="TableSec">
          <tr style="font-size: 18px;color: #333333">
            <td>支持币种</td>
            <td>当前流通量</td>
            <td>DAPP余额</td>
          </tr>
          <tr class="HomePageContent" style="font-size: 16px;color: #666666">
            <td>AEC</td>
            <td>19000000</td>
            <td>109234.3443</td>
          </tr>
        </table>
        <div class="BalancePopupClose" @click="isShowBalancePopup = !isShowBalancePopup">
          <img src="../assets/common/img/icon_guanbi@2x.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailedHeader from '../components/DetailedHeader/DetailedHeader'
import DetailedTable from '../components/DetailedTable/DetailedTable'
export default {
  name: "ApplicationCenter",
  components:{
    //头部组件
    DetailedHeader,
    DetailedTable
  },
  data () {
    return {
      //DetailedHeader
      title: {
        text1: '应用中心',
        text2: '/ 应用列表'
      },
      //nav 切换
      active: 'isShowApplicationList',
      isShowBalancePopup: false
    }
  },
  methods:{
    show(i){
      this.active = i
    },
  }
}
</script>

<style scoped lang="stylus">
  gradient($a,$b) { //渐变
    background: linear-gradient(to left, $a, $b)
    background:-moz-linear-gradient(to left , $a, $b)
    background:-o-linear-gradient(to left , $a, $b)
    background: -webkit-gradient(linear,left top,right top,from($a),to($b))
  }
  .ApplicationCenterWrap
    width 100%
    .ApplicationCenterMain
      width 100%
      padding 50px 85px 90px 72px
      background #F2F6FF
      box-sizing border-box
      .ApplicationCenterContentNav
        width 100%
        height 104px
        background #ffffff
        padding-left 20px
        box-sizing border-box
        /*min-width 975px*/
        div
          float left
          height 48px
          line-height 48px
          margin-left 42px
          margin-top 28px
          border-radius 24px
          cursor pointer
          span
            margin 0 29px
            font-size 20px
            color #394047
        .on
          box-shadow:0px 0px 8px rgba(0,60,231,0.31)
          gradient(#0A5EFF,#3D7EFC)
          span
            color #ffffff

      .ContentWrap
        .TableFir
          border-radius 5px
          box-shadow 7px 0px 4px rgba(65,46,211,0.02)
          overflow hidden
          tr
            height 60px
            color #555555
            cursor pointer
            font-size 16px
            border 1px solid #F0F0F0
            box-sizing border-box
            text-align center
            &:hover
              box-shadow 0 0 16px  red
          .HomePageContent
            background #ffffff
            color #666666
            border-left 5px solid #ffffff
            &:hover
              box-shadow 0 0 16px #EDEEEF inset
              border-left 5px solid #FF6E4B
            span
              color #3679FC
    .BalancePopup
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      background:rgba(0,0,0,0.5);
      .BalancePopupContent
        width 788px
        height 342px
        position absolute
        top 50%
        left 50%
        margin-top -171px
        margin-left -394px
        background #ffffff
        box-shadow 7px 0px 18px rgba(6,8,65,0.26)
        border-radius 8px
        padding 0 55px
        box-sizing border-box
        .Text
          margin-top 56px
          text-align center
          font-size 36px
          color #333333
          font-family:PingFang-SC-Bold
        #TableSec
          border-radius 5px
          overflow hidden
          margin-top 64px
          tr
            height 60px
            color #555555
            cursor pointer
            font-size 16px
            border-bottom  1px solid #F0F0F0
            box-sizing border-box
            text-align center
          .HomePageContent
            background #ffffff
            color #666666
        .BalancePopupClose
          width 20px
          height 20px
          position absolute
          top 24px
          right 24px
          cursor pointer


</style>
