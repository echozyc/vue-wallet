<template>
    <div class="HomePageWrap">
      <!--首页 Header-->
      <div class="HomePageHeader">
          <span class="TextTitle">首页</span>
          <div class="Avatar"></div>
          <div class="Input">
            <img src="../assets/common/img/sousuo.png" alt="">
            <input type="text" placeholder="请输入搜索内容">
          </div>
      </div>
      <!--首页 Main-->
      <div class="HomePageMain">
        <!--Details 细节内容-->
        <div class="HomePageDetails">
          <div class="HomePageBalance HomePageD">
            <p class="HomePageDTitle">余额</p>
            <p class="HomePageDNumber">12600</p>
            <p class="HomePageDText">ACE</p>
          </div>
          <div class="HomePageHeight HomePageD">
            <p class="HomePageDTitle">最后区块高度</p>
            <p class="HomePageDNumber">22600</p>
            <p class="HomePageDText">2018/05/24 17:39:50</p>
          </div>
          <div class="HomePageEdition HomePageD">
            <p class="HomePageDTitle">版本信息</p>
            <p class="HomePageDNumber">1.0.1</p>
            <p class="HomePageDText">2018/05/24 17:39:50</p>
          </div>
        </div>
        <!--Transaction 交易内容-->
        <div class="HomePageTransaction">
          <div class="MeTransaction">
            <span>我的交易</span>
          </div>
          <table border="0" width="100%" cellpadding="0">
            <tr>
              <td>ID</td>
              <td>类型</td>
              <td>发送者</td>
              <td>接受者</td>
              <td>日期</td>
              <td>金额(费用)</td>
            </tr>
            <tr class="HomePageContent">
              <td>123456</td>
              <td>ACE</td>
              <td>stan</td>
              <td>sendi</td>
              <td>2017-02-09</td>
              <td>5000</td>
            </tr>
            <tr class="HomePageContent">
              <td>123456</td>
              <td>ACE</td>
              <td>stan</td>
              <td>sendi</td>
              <td>2017-02-09</td>
              <td>5000</td>
            </tr>
            <tr class="HomePageContent">
              <td>123456</td>
              <td>ACE</td>
              <td>stan</td>
              <td>sendi</td>
              <td>2017-02-09</td>
              <td>5000</td>
            </tr>
            <tr class="HomePageContent">
              <td>123456</td>
              <td>ACE</td>
              <td>stan</td>
              <td>sendi</td>
              <td>2017-02-09</td>
              <td>5000</td>
            </tr>
            <tr class="HomePageContent">
              <td>123456</td>
              <td>ACE</td>
              <td>stan</td>
              <td>sendi</td>
              <td>2017-02-09</td>
              <td>5000</td>
            </tr>
            <tr class="HomePageContent">
              <td>123456</td>
              <td>ACE</td>
              <td>stan</td>
              <td>sendi</td>
              <td>2017-02-09</td>
              <td>5000</td>
            </tr>
            <tr class="HomePageContent">
              <td>123456</td>
              <td>ACE</td>
              <td>stan</td>
              <td>sendi</td>
              <td>2017-02-09</td>
              <td>5000</td>
            </tr>
            <tr class="HomePageContent">
              <td>123456</td>
              <td>ACE</td>
              <td>stan</td>
              <td>sendi</td>
              <td>2017-02-09</td>
              <td>5000</td>
            </tr>
            <tr class="HomePageContent">
              <td>123456</td>
              <td>ACE</td>
              <td>stan</td>
              <td>sendi</td>
              <td>2017-02-09</td>
              <td>5000</td>
            </tr>
            <tr class="HomePageContent">
              <td>123456</td>
              <td>ACE</td>
              <td>stan</td>
              <td>sendi</td>
              <td>2017-02-09</td>
              <td>5000</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Fir'
}
</script>

<style scoped lang="stylus">
.HomePageWrap
  width 100%
  background #F1F2F5
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
  .HomePageMain
    width 100%
    padding 50px 85px 90px 72px
    background #F2F6FF
    box-sizing border-box
    .HomePageDetails
      width 100%
      height 240px
      position relative
      .HomePageD
        width:32%;
        height:240px;
        background:rgba(255,255,255,1);
        border-radius:5px;
        box-shadow:7px 0px 35px rgba(237,237,240,0.58)
        color #000000
        p
          text-align left
        .HomePageDTitle
          margin-top 43px
          margin-left 56px
          font-size 22px
          font-family PingFang-SC-Bold
          color rgba(19,30,34,1)
        .HomePageDNumber
          margin-top 43px
          margin-left 55px
          font-size 42px
          font-family PingFang-SC-Bold
          color rgba(64,152,243,1)
        .HomePageDText
          margin-top 38px
          margin-left 56px
          font-size 20px
          font-family PingFang-SC-Bold
          color rgba(145,154,176,1)
      .HomePageBalance
        float left
        left 0
        border 1px solid #4DA1FF
        box-shadow 10px 0 #4DA1FF inset
      .HomePageEdition
        float right
        right 0
        border 1px solid #42E9E1
        box-shadow 10px 0 #42E9E1 inset
      .HomePageHeight
        position absolute
        left 50%
        top 50%
        transform translate(-50%,-50%)
        border 1px solid #FF6E4B
        box-shadow 10px 0 #FF6E4B inset


    .HomePageTransaction
      margin-top 43px
      .MeTransaction
        width 100%
        height 76px
        line-height 76px
        background #ffffff
        text-align left
        border-radius 5px
        box-shadow 7px 0px 4px rgba(65,46,211,0.02)
        span
          margin-left 58px
          font-size 22px
          color #333333
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
          &:hover
            box-shadow 0 0 16px  red
        .HomePageContent
          background #ffffff
          color #666666
          &:hover
            box-shadow 0 0 16px #EDEEEF inset



</style>
