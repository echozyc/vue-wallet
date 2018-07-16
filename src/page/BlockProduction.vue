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
           <div class="Register">
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
        <DetailedTable :tableTitle="tableTitle"></DetailedTable>
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
      // DetailedTable 组件传值（传递名称）
      tableTitle: {
        //最多7个，最少6个，最后一个没有即为空
        text1:'高度',
        text2:'日期',
        text3:'ID',
        text4:'交易',
        text5:'总金额',
        text6:'总费用',
        text7:'奖励'
      },
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
</style>
