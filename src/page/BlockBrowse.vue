<template>
  <div class="BlockBrowseWrap">
    <!--区块浏览 Header-->
    <DetailedHeader :title='title'></DetailedHeader>
    <!--区块浏览 Main-->
    <div class="BlockBrowseMain">
      <!--导航 nav-->
      <div class="BlockBrowseContentNav">
        <div class="zichangaiyao">
          <span>最新区块</span>
        </div>
      </div>
      <!--table表格 组件-->
      <DetailedTable :tableTitle="tableTitle"></DetailedTable>
    </div>
  </div>
</template>

<script>
import DetailedHeader from '../components/DetailedHeader/DetailedHeader'
import DetailedTable from '../components/DetailedTable/DetailedTable'
export default {
  name: "BlockBrowse",
  components:{
    //头部组件
    DetailedHeader,
    DetailedTable
  },
  data () {
    return {
      title: {
        text1: '区块浏览'
      },
      // DetailedTable 组件传值（传递名称）
      tableTitle: {
        //最多7个，最少6个，最后一个没有即为空
        text1:'高度',
        text2:'日期',
        text3:'ID',
        text4:'生产者',
        text5:'交易',
        text6:'总费用',
        text7:'奖励'
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .BlockBrowseWrap
    width 100%
    .BlockBrowseMain
      width 100%
      padding 50px 85px 90px 72px
      background #F2F6FF
      box-sizing border-box
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
          background -webkit-linear-gradient(top,#3D7EFC 0,#0A5EFF 100%)
          background -moz-linear-gradient(top,#3D7EFC 0,#0A5EFF 100%)
          background -o-linear-gradient(top,#3D7EFC 0,#0A5EFF 100%)
          background linear-gradient(to bottom,#3D7EFC 0,#0A5EFF 100%)
          span
            color #ffffff

</style>
