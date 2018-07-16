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
            <DetailedTable :tableTitle="tableTitle"></DetailedTable>
          </div>
          <!--投票记录-->
          <div class="VotingRecord" v-show="active == 'isShowVotingRecord'">
            <!--table表格 组件-->
            <DetailedTable :tableTitle="tableTitle"></DetailedTable>
          </div>
          <!--谁投了我-->
          <div class="WhoThrewMe" v-show="active == 'isShowWhoThrewMe'">
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
      // DetailedTable 组件传值（传递名称）
      tableTitle: {
        //最多7个，最少6个，最后一个没有即为空
        text1:'排名',
        text2:'受托人',
        text3:'地址',
        text4:'生产率',
        text5:'生产区块',
        text6:'得票率',
        text7:'投票'
      },
      //nav 切换
      active: 'isShowTrusteesList',
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
