<template>
  <div class="VoteWrap">
    <!--投票 Header-->
    <DetailedHeader :title='title'></DetailedHeader>
    <!--投票 Main-->
    <div class="VoteMain">
      <!--导航 nav-->
      <div class="VoteContentNav">
        <div class="zichangaiyao"  @click="show('isShowTrusteesList')" :class="{on:active == 'isShowTrusteesList'}">
          <span>受托人列表</span>
        </div>
        <div class="zhucefaxing"  @click="show('isShowVotingRecord')" :class="{on:active == 'isShowVotingRecord'}">
          <span>投票记录</span>
        </div>
        <div class="zhucefaxing"  @click="show('isShowWhoThrewMe')" :class="{on:active == 'isShowWhoThrewMe'}">
          <span>谁投了我</span>
        </div>
      </div>

      <div class="ContentWrap">
          <!--受托人列表-->
          <div class="TrusteesList" v-show="active == 'isShowTrusteesList'">
            <!--table表格 组件-->
            <table border="0" width="100%" cellpadding="20" class="TableFir">
              <tr>
                <td>排名</td>
                <td>受托人</td>
                <td>地址</td>
                <td>生产率</td>
                <td>生产区块</td>
                <td>得票率</td>
                <td>投票</td>
              </tr>
              <tr class="HomePageContent">
                <td>1</td>
                <td>asdjk</td>
                <td><span>cd7f15c136f...0a683fce58</span></td>
                <td>0.23</td>
                <td>2017</td>
                <td>5000</td>
                <td @click="isShowVotePopup = !isShowVotePopup">
                  <span class="Vote">投票</span>
                </td>
              </tr>
              <tr class="HomePageContent">
                <td>1</td>
                <td>asdjk</td>
                <td><span>cd7f15c136f...0a683fce58</span></td>
                <td>0.23</td>
                <td>2017</td>
                <td>5000</td>
                <td @click="isShowVotePopup = !isShowVotePopup">
                  <span class=" Vote">投票</span>
                </td>
              </tr>
            </table>
          </div>
          <!--投票记录-->
          <div class="VotingRecord" v-show="active == 'isShowVotingRecord'">
            <!--table表格 组件-->
            <table border="0" width="100%" cellpadding="20" class="TableFir">
              <tr>
                <td></td>
                <td>排名</td>
                <td>受托人</td>
                <td>地址</td>
                <td>生产率</td>
                <td>生产区块</td>
                <td>得票率</td>
              </tr>
              <tr class="HomePageContent">
                <td>12</td>
                <td>2</td>
                <td>ce58</td>
                <td>AKxXfpqyw...UWHDUzzx</td>
                <td>20%</td>
                <td>5000</td>
                <td>90%</td>
              </tr>
              <tr class="HomePageContent">
                <td>12</td>
                <td>2</td>
                <td>ce58</td>
                <td>AKxXfpqyw...UWHDUzzx</td>
                <td>20%</td>
                <td>5000</td>
                <td>90%</td>
              </tr>
              <tr class="HomePageContent">
                <td>12</td>
                <td>2</td>
                <td>ce58</td>
                <td>AKxXfpqyw...UWHDUzzx</td>
                <td>20%</td>
                <td>5000</td>
                <td>90%</td>
              </tr>
            </table>
          </div>
          <!--谁投了我-->
          <div class="WhoThrewMe" v-show="active == 'isShowWhoThrewMe'">
            <!--table表格 组件-->
            <table border="0" width="100%" cellpadding="20" cellspacing="0" class="TableFir">
              <tr cellspacing="0">
                <td>地址</td>
                <td>用户名</td>
                <td>权重</td>
              </tr>
              <tr class="HomePageContent">
                <td>AKxXfpqyw...UWHDUzzx</td>
                <td>asjdka</td>
                <td>5000</td>
              </tr>
              <tr class="HomePageContent">
                <td>AKxXfpqyw...UWHDUzzx</td>
                <td>asjdka</td>
                <td>5000</td>
              </tr>
              <tr class="HomePageContent">
                <td>AKxXfpqyw...UWHDUzzx</td>
                <td>asjdka</td>
                <td>5000</td>
              </tr>
            </table>
          </div>
      </div>
    </div>
    <!--投票给受托人弹出层-->
    <div class="VotePopup" v-show="isShowVotePopup">
      <div class="VotePopupContent">
        <p class="Text">
          <span>投票给受托人</span>
        </p>
        <table id='TableSec' border="0" width="100%" cellpadding="20">
          <tr style="font-size: 18px;color: #333333">
            <td>受托人</td>
            <td>受托人地址</td>
            <td>投票数</td>
          </tr>
          <tr class="HomePageContent" style="font-size: 16px;color: #666666">
            <td>hijkk1234</td>
            <td>A4whbwURe53aUSGDk1tkTdt3YiwkbwU68t</td>
            <td>
              <el-input-number v-model="num1"  :min="1"  label="描述文字"></el-input-number>
            </td>
          </tr>
        </table>
        <p class="VoteNotice">
          备注：请确认您的选择与投票数目，投票给受托人需支付 0.1 AEC/票
        </p>
        <div class="VotePopupButton">
          <button class="Cancel" @click="isShowVotePopup = !isShowVotePopup">取消</button>
          <button class="Sure">确认投票</button>
        </div>
        <div class="VotePopupClose" @click="isShowVotePopup = !isShowVotePopup">
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
  name: "Vote",
  components:{
    //头部组件
    DetailedHeader,
    DetailedTable
  },
  data () {
    return {
      title: {
        text1: '投票',
        text2: '/ 委托人列表'
      },
      //nav 切换
      active: 'isShowTrusteesList',
      //弹出层
      isShowVotePopup: false,
      //弹出层计数器
      num1: 1

    }
  },
  methods:{
    show(i){
      this.active = i
    }
  }
}
</script>

<style lang="stylus">
  gradient($a,$b) { //渐变
    background: linear-gradient(to left, $a, $b)
    background:-moz-linear-gradient(to left , $a, $b)
    background:-o-linear-gradient(to left , $a, $b)
    background: -webkit-gradient(linear,left top,right top,from($a),to($b))
  }
  .VoteWrap
    width 100%
    .VoteMain
      width 100%
      padding 50px 85px 90px 72px
      background #F2F6FF
      box-sizing border-box
      .VoteContentNav
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
            .Vote
              border-radius 5px
              padding 7px 17px
              gradient(#0A5EFF,#3D7EFC)
              color #ffffff
              box-shadow 0px 0px 8px rgba(0,60,231,0.31)
            span
              color #3679FC
    .VotePopup
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      background:rgba(0,0,0,0.5);
      .VotePopupContent
        width 878px
        height 448px
        position absolute
        top 50%
        left 50%
        margin-top -224px
        margin-left -439px
        background #ffffff
        box-shadow 7px 0px 18px rgba(6,8,65,0.26)
        border-radius 8px
        padding 0 50px
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
            .el-input-number
              width 90px
              .el-input-number__decrease,.el-input-number__increase
                width 26px
              .el-input__inner
                padding 0
        .VotePopupButton
          margin-top 70px
          button
            width 137px
            height 48px
            border-radius 4px
            font-size:20px;
            font-family:PingFang-SC-Regular;
            cursor pointer
          .Cancel
            border 1px solid #0057FF
            color #0057FF
            float left
            margin-left 196px
            background #ffffff
          .Sure
            gradient(#0A5EFF,#3D7EFC)
            color #FFFFFF
            float right
            margin-right 196px
        .VoteNotice
          margin-top 20px
          color #3679FC
          font-size 16px
          text-align center
        .VotePopupClose
          width 20px
          height 20px
          position absolute
          top 24px
          right 24px
          cursor pointer
</style>
