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
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="5"
        layout="prev, pager, next, jumper"
        :total="1000">
      </el-pagination>
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
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
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
