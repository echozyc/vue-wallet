<template>
  <div class="AssetEvaluationWrap">
    <!--资产评估 Header-->
    <DetailedHeader :title='title'></DetailedHeader>
    <!--资产评估 Main-->
    <div class="AssetEvaluationMain">
      <!--导航 nav-->
      <div class="AssetEvaluationContentNav">
        <div class="zichangaiyao"  @click="show('isShowIssueAudit')" :class="{on:active == 'isShowIssueAudit'}">
          <span>应用列表</span>
        </div>
        <div class="zhucefaxing"  @click="show('isShowAlreadyPassed')" :class="{on:active == 'isShowAlreadyPassed'}">
          <span>已安装应用列表</span>
        </div>
      </div>

      <div class="ContentWrap">
        <!--发行审核-->
        <div class="IssueAudit"  v-show="active == 'isShowIssueAudit'">
          <!--table表格 组件-->
          <DetailedTable :tableTitle="tableTitle"></DetailedTable>
        </div>
        <!--已通过-->
        <div class="AlreadyPassed"  v-show="active == 'isShowAlreadyPassed'">
          <!--table表格 组件-->
          <DetailedTable :tableTitle="tableTitle"></DetailedTable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailedHeader from '../components/DetailedHeader/DetailedHeader'
import DetailedTable from '../components/DetailedTable/DetailedTable'
export default {
  name: "AssetEvaluation",
  components:{
    //头部组件
    DetailedHeader,
    DetailedTable
  },
  data () {
    return {
      title: {
        text1: '资产评估',
        text2: '/ 发行审核'
      },
      // DetailedTable 组件传值（传递名称）
      tableTitle: {
        //最多7个，最少6个，最后一个没有即为空
        text1:'资产币种',
        text2:'交易ID',
        text3:'兑换率',
        text4:'发行数量',
        text5:'投票详情',
        text6:'发送者',
        text7:'投票'
      },
      //nav 切换
      active: 'isShowIssueAudit',
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
  .AssetEvaluationWrap
    width 100%
    .AssetEvaluationMain
      width 100%
      padding 50px 85px 90px 72px
      background #F2F6FF
      box-sizing border-box
      .AssetEvaluationContentNav
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
