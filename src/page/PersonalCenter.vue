<template>
  <div class="PersonalCenterWrap">
    <!--个人中心 Header组件-->
    <DetailedHeader :title='title'></DetailedHeader>
    <!--个人中心 Main-->
    <div class="PersonalCenterMain">
      <!--导航 nav-->
      <div class="MyAssetsContentNav">
        <div class="zichangaiyao"  @click="show('isShowAccountInformation')" :class="{on:active == 'isShowAccountInformation'}">
          <span>账户信息</span>
        </div>
        <div class="zhucefaxing"  @click="show('isShowSecondPassword')" :class="{on:active == 'isShowSecondPassword'}">
          <span>二级密码</span>
        </div>
      </div>

      <div class="ContentWrap">

        <!--账户信息-->
        <div class="AccountInformation" v-show="active == 'isShowAccountInformation'">
          <div class="left">
            <!--头像-->
            <div class="avatar">
              <img src="../assets/common/img/touxiang_big@2x.png" alt="">
            </div>
          </div>

          <div class="middle">
            <!--总余额-->
            <div class="balance">
              <p class="balanceTitle publicTitle">总余额</p>
              <p class="balanceContent">
                <span class="number">12600</span>
                <span class="unit">PEB</span>
              </p>
            </div>
            <!--二级密码-->
            <div class="passward">
               <p class="passwardTitle publicTitle">二级密码</p>
               <p class="passwardContent">未设置</p>
            </div>
          </div>

          <div class="right">
            <!--地址-->
            <div class="address">
              <div class="addressC">
                <p class="addressTitle">地址</p>
                <p class="addressContent">
                  7d7b5345b45a399df54dd2cd375f3de661c567a894cc292bc9bf894c
                </p>
              </div>
              <!--二维码-->
              <div class="QRcode">
                <div class="ewm"></div>
              </div>
            </div>
            <!--公钥-->
            <div class="publicKey">
              <p class="publicKeyTitle publicTitle">公钥</p>
              <p class="publicKeyContent">
                7d7b5345b45a399df54dd2cd375f3de661c567a894cc292bc9bf894cc292bc9bf8c567a894cc292bc9bf894cc292bc9bf894cc292bc9bf431a445594cc292bc9bf431a44555681894cc292bc9bf
              </p>
            </div>
          </div>
        </div>

        <!--二级密码-->
        <div class="SecondPassword" v-show="active == 'isShowSecondPassword'">
          <div class="content">
            <ul class="lists">
              <li class="list">
                    <span class="title">
                        输入密码
                    </span>
                <input class="text" type="text" placeholder="输入8至16位数字和字母组合">
              </li>
              <li class="list">
                    <span class="title">
                        确认密码
                    </span>
                <input class="text" type="text" placeholder="再次输入">
              </li>
            </ul>
            <p class="notice">
              备注：请确定您已经安全保存了二级密码，一旦丢失，您在AE Cloud系统中的财产将无法找回
            </p>
            <a href="javascript:;" class="btn" style="margin-left: 172px">提交</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailedHeader from '../components/DetailedHeader/DetailedHeader'
export default {
  name: "PersonalCenter",
  components:{
    //头部组件
    DetailedHeader
  },
  data () {
    return {
      title: {
        text1: '个人中心',
        text2: '/ 账户信息'
      },
      active: 'isShowAccountInformation',
    }
  },
  methods:{
    show(i){
      this.active = i
    }
  }
}
</script>

<style scoped lang="stylus">
  $bg-color = #f2f6ff
  $bg-input = #FAFAFA
  $border-color = #EBEBEB
  $text-color = #666666
  $text-actice = #3679FC
  $text-notice = #3679FC
  $notice-size = 16px
  $font-size = 16px
  $btn-size = 24px
  $white = #ffffff
  $blue = #3679FC
  gradient($a,$b) { //渐变
      background: linear-gradient(to left, $a, $b)
      background:-moz-linear-gradient(to left , $a, $b)
      background:-o-linear-gradient(to left , $a, $b)
      background: -webkit-gradient(linear,left top,right top,from($a),to($b))
    }


.PersonalCenterWrap
  width 100%
  .PersonalCenterMain
    width 100%
    padding 50px 85px 90px 72px
    background #F2F6FF
    box-sizing border-box
    .MyAssetsContentNav
      width 100%
      height 104px
      background #ffffff
      padding-left 20px
      box-sizing border-box
      min-width 975px
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
      border-top 1px solid #F0F0F0
      >div
        min-width 975px
        .content
          background #fff
          width 100%
          /*height 100%*/
      .AccountInformation
        width 100%
        height 443px
        background #ffffff
        >div
          float left
          height 100%
        .left
          width 16.6%
          border-right 1px solid #EAEDEF
          box-sizing border-box
          .avatar
            width 138px
            height 138px
            margin 0 auto
            margin-top 152px
        .middle
          width 30%
          border-right 1px solid #EAEDEF
          box-sizing border-box
          >div
            height 50%
            overflow hidden
            .publicTitle
              margin-top 65px
              margin-left 50px
              font-size 18px
              color #131E22
          .balance
            border-bottom 1px solid #EAEDEF
            box-sizing border-box
            .balanceContent
              margin-top 35px
              margin-left 50px
              .number
                font-size 50px
                color #3679FC
          .passward
            .passwardContent
              margin-left 50px
              margin-top 53px
              color #3679FC
        .right
          width 53.4%
          >div
            height 50%
            overflow hidden
            .publicTitle
              margin-top 65px
              margin-left 50px
              font-size 18px
              color #131E22
          .address
            border-bottom 1px solid #EAEDEF
            box-sizing border-box
            .addressC
              float left
              width 67.7%
              height 100%
              .addressTitle
                margin-top 65px
                margin-left 50px
                font-size 18px
                color #131E22
              .addressContent
                padding-top 53px
                padding-left 50px
                box-sizing border-box
                font-size 18px
                color #666666
                word-break normal
                word-wrap break-word
            .QRcode
              float left
              width 32.3%
              height 100%
              .ewm
                width 130px
                height 130px
                margin 0 auto
                margin-top 45px
                background #333333
          .publicKey
            width 100%
            .publicKeyContent
              padding-top 53px
              padding-left 50px
              padding-right 50px
              box-sizing border-box
              font-size 18px
              color #666666
              word-break normal
              word-wrap break-word

      .SecondPassword
        .content
          background #fff
          width 100%
          /*height 100%*/
          .lists
            padding-top 77px
            position relative
            .list
              margin-left 74px
              margin-bottom 30px
              .title
                display inline-block
                color $text-color
                font-size $font-size
                text-align right
              .text
                display inline-block
                margin-left 30px
                padding 0 30px
                width: 646px
                height: 60px
                font-size $font-size
                border-radius 5px
                background $bg-input
                border 1px solid $border-color
                &::-webkit-input-placeholder /* WebKit browsers */
                  color #B7B8B8
                &:-moz-placeholder /* Mozilla Firefox 4 to 18 */
                  color #B7B8B8
                &::-moz-placeholder /* Mozilla Firefox 19+ */
                  color #B7B8B8
                &:-ms-input-placeholder /* Internet Explorer 10+ */
                  color #B7B8B8
          .notice
            margin-left 172px
            font-size $notice-size
            color $text-notice
          .btn
            display inline-block
            margin: 53px 0 103px 180px
            width: 704px
            height: 62px
            font-size $btn-size
            color #fff
            line-height 62px
            text-align center
            border-radius 5px
            gradient(#0A5EFF,#3D7EFC)

</style>
