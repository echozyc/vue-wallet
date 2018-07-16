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
          <DetailedTable :tableTitle="tableTitle"></DetailedTable>
        </div>
        <!--已安装列表-->
        <div class="AlreadyInstalled" v-show="active == 'isShowAlreadyInstalled'">
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
      // DetailedTable 组件传值（传递名称）
      tableTitle: {
        //最多7个，最少6个，最后一个没有即为空
        text1:'图标',
        text2:'名称',
        text3:'描述',
        text4:'ID',
        text5:'类型',
        text6:'余额详情',
        text7:'源码'
      },
      //nav 切换
      active: 'isShowApplicationList',
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
