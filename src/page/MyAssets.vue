<template>
    <div class="MyAssetsWrap">
      <!--我的资产 Header组件-->
      <DetailedHeader :title='title'></DetailedHeader>
      <!--我的资产 Main-->
      <div class="MyAssetsMain">
        <!--导航 nav-->
        <div class="MyAssetsContentNav">
          <div class="zichangaiyao"  @click="show('isShowAssetSummary')">
            <span>资产概要</span>
          </div>
          <div class="zhucefaxing"  @click="show('isShowRegisteredIssue')">
            <span>注册发行商</span>
          </div>
          <div class="faxingzhanghu" @click="show('isShowIssueAssets')">
            <span>发行资产</span>
          </div>
          <div class="faxingzichan"  @click="show('isShowMeIssueAssets')">
            <span>我发行的资产</span>
          </div>
        </div>
        <div class="ContentWrap">
          <!--资产概要-->
          <div class="AssetSummary" v-show="active == 'isShowAssetSummary'">
            <!--table表格 组件-->
            <DetailedTable :tableTitle="tableTitle"></DetailedTable>
          </div>
          <!--注册发行商-->
          <div class="RegisteredIssue" v-show="active == 'isShowRegisteredIssue'">
            <p style="color: #000;">注册发行商</p>
          </div>
          <!--发行资产-->
          <div class="IssueAssets" v-show="active == 'isShowIssueAssets'">
            <p style="color: #000;">发行资产</p>
          </div>
          <!--我发行的资产-->
          <div class="MeIssueAssets" v-show="active == 'isShowMeIssueAssets'">
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
  name: "MyAssetsWrap",
  components:{
    //头部组件
    DetailedHeader,
    //table表格组件
    DetailedTable
  },
  data () {
    return {
      //DetailedHeader 样式组件传值
      title: {
        text1: '我的资产',
        text2: '/ 资产概要'
      },
      // DetailedTable 组件传值（传递名称）
      tableTitle: {
        //最多7个，最少6个，最后一个没有即为空
        text1:'资产币种',
        text2:'资产名称',
        text3:'余额',
        text4:'精度',
        text5:'发行总量',
        text6:'金额(费用)',
        text7:'操作',
      },
      //nav 切换
      active: 'isShowAssetSummary',
      isShowAssetSummary: true,
      isShowRegisteredIssue: false,
      isShowIssueAssets:false,
      isShowMeIssueAssets:false
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
.MyAssetsWrap
  width 100%
  height 500px
  background red
  .MyAssetsMain
    width 100%
    height 500px
    padding 50px 85px 90px 72px
    background #F2F6FF
    box-sizing border-box
    .MyAssetsContentNav
      width 100%
      height 104px
      background #ffffff
      padding-left 20px
      box-sizing border-box
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
