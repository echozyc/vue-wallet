<template>
  <div class="BlockProductionWrap">
    <!--区块生产 Header-->
    <DetailedHeader :title='title'></DetailedHeader>
    <!--区块生产 Main-->
    <div class="BlockProductionMain">

      <!--受托人基本信息-->
      <div class="BasicInformationWrap">
         <div class="BasicInformationTitle">
            <span>
              受托人基本信息
            </span>
           <div class="Register" @click="isShowRegisterPopup = !isShowRegisterPopup">
             <span>注册受托人</span>
           </div>
           <div class="Unopened">
             <span>未开启</span>
           </div>
         </div>
         <div class="BasicInformationContent">
           <!--总收益-->
           <div class="Profit">
             <div class="ProfitWrap">
               <p class="Top">总收益</p>
               <p class="Middle">213.456</p>
               <p class="Bottom">AEC</p>
               <p></p>
             </div>
           </div>
           <!--排名-->
           <div class="Ranking Num">
             <div class="ImgAvatar">
                 <img src="../assets/common/img/icon_paiming@2x.png" alt="">
                 <span>排名</span>
             </div>
             <p class="ContentNumber" style="color: #121FEA;">19</p>
           </div>
           <!--生产率-->
           <div class="Productivity Num">
             <div class="ImgAvatar">
               <img src="../assets/common/img/icon_shengchanlv@2x.png" alt="">
               <span>生产率</span>
             </div>
             <p class="ContentNumber" style="color: #88C78B">- -</p>
           </div>
           <!--得票率-->
           <div class="GetVotes Num">
             <div class="ImgAvatar">
               <img src="../assets/common/img/icon_depiaolv@2x.png" alt="">
               <span>得票率</span>

             </div>
             <p class="ContentNumber" style="color: #B830FF">90%</p>
           </div>
         </div>
      </div>

      <!--生产的区块-->
      <div class="ProductionWrap">
        <!--导航 nav-->
        <div class="BlockBrowseContentNav">
          <div class="zichangaiyao on">
            <span>最新区块</span>
          </div>
        </div>
        <!--table表格 组件-->
        <table border="0" width="100%" cellpadding="0">
          <tr>
            <td>高度</td>
            <td>日期</td>
            <td>ID</td>
            <td>交易</td>
            <td>总金额</td>
            <td>总费用</td>
            <td>奖励</td>
          </tr>
          <tr class="HomePageContent">
            <td><span>123456</span></td>
            <td>ACE</td>
            <td><span>stan</span></td>
            <td>sendi</td>
            <td><span>2017</span></td>
            <td>5000</td>
            <td>0.0</td>
          </tr>
          <tr class="HomePageContent">
            <td><span>123456</span></td>
            <td>ACE</td>
            <td><span>stan</span></td>
            <td>sendi</td>
            <td><span>2017</span></td>
            <td>5000</td>
            <td>0.0</td>
          </tr>
          <tr class="HomePageContent">
            <td><span>123456</span></td>
            <td>ACE</td>
            <td><span>stan</span></td>
            <td>sendi</td>
            <td><span>2017</span></td>
            <td>5000</td>
            <td>0.0</td>
          </tr>
        </table>
      </div>
    </div>
    <!--注册为受托人弹出层-->
    <div class="RegisterPopup" v-show="isShowRegisterPopup">
      <div class="RegisterPopupContent">
        <p class="Text">
          <span>注册为受托人</span>
        </p>
        <div class="RegisterInputWrap">
           <span>受托人名称</span>
           <input type="text" placeholder="最少2位和最多8位的数字和字母组合">
        </div>
        <p class="RegisterNotice">
          备注：注册成为受托人需支付100AEC
        </p>
        <div class="RegisterPopupButton">
          <button class="Cancel" @click="isShowRegisterPopup = !isShowRegisterPopup">取消</button>
          <button class="Sure">注册</button>
        </div>
        <div class="RegisterPopupClose" @click="isShowRegisterPopup = !isShowRegisterPopup">
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
  name: "BlockProduction",
  components:{
    //头部组件
    DetailedHeader,
    DetailedTable
  },
  data () {
    return {
      title: {
        text1: '区块生产'
      },
      isShowRegisterPopup:false
    }
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
  .BlockProductionWrap
    width 100%
    .BlockProductionMain
      width 100%
      padding 50px 85px 90px 72px
      background #F2F6FF
      box-sizing border-box
      .BasicInformationWrap
        width 100%
        height 428px
        .BasicInformationTitle
          width 100%
          height 103px
          line-height 103px
          border-bottom 1px solid #F0F0F0
          background #ffffff
          .Unopened,.Register
            width 143px
            height 50px
            gradient(#0A5EFF,#3D7EFC)
            line-height 50px
            border-radius:5px;
            box-shadow:0px 0px 8px rgba(0,60,231,0.31)
            float right
            margin-right 60px
            margin-top 30px
            text-align center
            cursor pointer
            span
              color #ffffff
              font-size 20px
              text-align center
          >span
            margin-left 56px
            font-size 22px
            color #333333
        .BasicInformationContent
          height 325px
          background: #ffffff
          padding-right 60px
          box-sizing border-box
          .Profit
            width 33.1%
            height 100%
            float left
            .ProfitWrap
              width 250px
              height 250px
              border 10px solid #E7EDFE
              border-radius 50%
              margin 0 auto
              margin-top 37px
              box-sizing border-box
              //box-shadow:1px 1px 1px rgba(72,82,239,1)
              .Top
                font-size 22px
                color #999999
                margin-top 57px
                text-align center
              .Middle
                font-size 40px
                color #3679FC
                margin-top 39px
                text-align center
              .Bottom
                font-size 22px
                color #333333
                text-align center
                margin-top 42px
          .Num
            width 22.3%
            height 100%
            float left
            position relative
            .ImgAvatar
              height 60px
              margin-top 73px
              position relative
              img
                position absolute
                top 0
                right 52%
              span
                color #333333
                font-size 20px
                position absolute
                left 52%
                top 20px
            .ContentNumber
              font-size 48px
              margin-top 64px
              text-align center
      .ProductionWrap
        margin-top 42px
        .BlockBrowseContentNav
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
        table
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
                box-shadow 0 0 16px
            .HomePageContent
              background #ffffff
              color #666666
              border-left 5px solid #ffffff
              &:hover
                box-shadow 0 0 16px #EDEEEF inset
                border-left 5px solid #FF6E4B
              span
                color #3679FC
    .RegisterPopup
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      background:rgba(0,0,0,0.5);
      .RegisterPopupContent
        width 803px
        height 406px
        position absolute
        top 50%
        left 50%
        margin-top -203px
        margin-left -402px
        background #ffffff
        box-shadow 7px 0px 18px rgba(6,8,65,0.26)
        border-radius 8px
        padding 0 60px
        box-sizing border-box
        .Text
          margin-top 56px
          text-align center
          font-size 36px
          color #333333
          font-family:PingFang-SC-Bold
        .RegisterInputWrap
          width 100%
          height 60px
          margin-top 55px
          span
            font-size 18px
            color #333333
          input
            width 580px
            height 60px
            border-radius:5px
            background #FAFAFA
            border 1px solid #EBEBEB
            font-size 18px
            padding-left 32px
            box-sizing border-box
            margin-left 9px
        .RegisterPopupButton
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
            margin-left 148px
            background #ffffff
          .Sure
            gradient(#0A5EFF,#3D7EFC)
            color #FFFFFF
            float right
            margin-right 148px
        .RegisterNotice
          margin-top 15px
          color #3679FC
          font-size 16px
          padding-left 107px
        .RegisterPopupClose
          width 20px
          height 20px
          position absolute
          top 24px
          right 24px
          cursor pointer
</style>
