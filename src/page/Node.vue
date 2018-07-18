<template>
  <div class="NodeWrap">
    <!--节点 Header-->
    <DetailedHeader :title='title'></DetailedHeader>
    <!--节点 Main-->
    <div class="NodeMain">
      <!--导航 nav-->
      <div class="NodeContentNav">
        <div class="zichangaiyao">
          <span>节点列表</span>
        </div>
      </div>
      <!--table表格 组件-->
      <table border="0" width="100%" cellpadding="0">
        <tr>
          <td>IP</td>
          <td>版本</td>
          <td>操作系统</td>
        </tr>
        <tr class="HomePageContent">
          <td>123456</td>
          <td>ACE</td>
          <td>stan</td>
        </tr>
        <tr class="HomePageContent">
          <td>123456</td>
          <td>ACE</td>
          <td>stan</td>
        </tr>
        <tr class="HomePageContent">
          <td>123456</td>
          <td>ACE</td>
          <td>stan</td>
        </tr>
      </table>
      <div class="PaginationWrap">
       <el-pagination class="Pagination"
         @size-change="handleSizeChange"
         @current-change="handleCurrentChange"
         :current-page.sync="currentPage3"
         :page-size="5"
         layout="prev, pager, next, jumper"
         :total="1000">
       </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import DetailedHeader from '../components/DetailedHeader/DetailedHeader'
import DetailedTable from '../components/DetailedTable/DetailedTable'
export default {
  name: "Node",
  components:{
    //头部组件
    DetailedHeader,
    DetailedTable
  },
  data () {
    return {
      title: {
        text1: '节点',
      },
      // DetailedTable 组件传值（传递名称）
      tableTitle: {
        //最多7个，最少6个，最后一个没有即为空
        text1:'IP',
        text2:'版本',
        text3:'操作系统'
      },
      currentPage3: 5,
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}

</script>
<style scoped lang="stylus">
  .NodeWrap
    width 100%
    .NodeMain
      width 100%
      padding 50px 85px 90px 72px
      background #F2F6FF
      box-sizing border-box
      .NodeContentNav
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
          background -webkit-linear-gradient(top,#3D7EFC 0,#0A5EFF 100%)
          background -moz-linear-gradient(top,#3D7EFC 0,#0A5EFF 100%)
          background -o-linear-gradient(top,#3D7EFC 0,#0A5EFF 100%)
          background linear-gradient(to bottom,#3D7EFC 0,#0A5EFF 100%)
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
            box-shadow 0 0 16px  red
        .HomePageContent
          background #ffffff
          color #666666
          &:hover
            box-shadow 0 0 16px #EDEEEF inset
      .PaginationWrap
        width 100%
        height 100px
        background #ffffff
        overflow: hidden
        .Pagination
          margin 40px 0 0 56px

</style>
