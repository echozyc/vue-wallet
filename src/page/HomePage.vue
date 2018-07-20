<template>
    <div class="HomePageWrap">
      <!--首页 Header组件-->
      <DetailedHeader :title='title'></DetailedHeader>
      <!--首页 Main-->
      <div class="HomePageMain">
        <!--Details 细节内容-->
        <div class="HomePageDetails">
          <div class="HomePageBalance HomePageD">
            <p class="HomePageDTitle">{{$t('YE')}}</p>
            <p class="HomePageDNumber">12600</p>
            <p class="HomePageDText">ACE</p>
          </div>
          <div class="HomePageHeight HomePageD">
            <p class="HomePageDTitle">{{$t('ZHQKGD')}}</p>
            <p class="HomePageDNumber">22600</p>
            <p class="HomePageDText">2018/05/24 17:39:50</p>
          </div>
          <div class="HomePageEdition HomePageD">
            <p class="HomePageDTitle">{{$t('BBXX')}}</p>
            <p class="HomePageDNumber">1.0.1</p>
            <p class="HomePageDText">2018/05/24 17:39:50</p>
          </div>
        </div>
        <!--Transaction 交易内容-->
        <div class="HomePageTransaction">
          <div class="MeTransaction">
            <span>{{$t('WDJY')}}</span>
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
  name: 'HomePageWrap',
  components: {
    //头部组件
    DetailedHeader,
    //table表格组件
    DetailedTable
  },
  data () {
    return {
      //DetailedHeader 样式组件传值
      title: {
        text1:this.$t('SY')
      },
      // DetailedTable 组件传值（传递名称）
      tableTitle: {
        //最多7个，最少6个，最后一个没有即为空
        text1:this.$t('ID'),
        text2:this.$t('LX'),
        text3:this.$t('FSZ'),
        text4:this.$t('JSZ'),
        text5:this.$t('RQ'),
        text6:this.$t('JEFY'),
        text7:this.$t(''),
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.HomePageWrap
  width 100%
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
        box-shadow:7px 0 35px rgba(237,237,240,0.58)
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
